import cx from "classnames"
import * as React from "react"
import { Icon, IconProps } from "../../../index"
import { getElementType, prefix } from "../../../lib"
import { ClassNameProp, ComponentProp } from "../../../lib/props"

export interface InputProps extends ClassNameProp, ComponentProp {
    /**
     * Basic determines if the placeholder disappears when a value is set or entered,
     * or if it floats above the content.
     * If no placeholder is set, this value has no effect.
     * @default false
     */
    basic?: boolean

    /** An input can appear disabled and be unable to change states. */
    disabled?: boolean

    /** An input can have autofocus. */
    autofocus?: boolean

    /** An input can display an error. */
    error?: boolean

    /** Displays an icon on the right of the input. */
    icon?: IconProps["name"]

    /**
     * Sets the html5 name of the input field.
     * The name attribute is used to reference elements in a JavaScript, or to reference form data after a form is submitted.
     */
    name?: string

    /**
     * Called when the user attempts to change the input value.
     * @param {string} value The proposed value after the change.
     * @param {React.FormEvent<HTMLInputElement>} event React's original event.
     * @param {InputProps} data All props of the component.
     */
    onChange?: (value: string, event: React.FormEvent<HTMLInputElement>, data: InputProps) => void

    /**
     * Called when the icon button wrapper is clicked.
     * @param {React.FormEvent<HTMLButtonElement>} event React's original event.
     */
    onIconClicked?: (event: React.FormEvent<HTMLButtonElement>) => void

    /** The placeholder of the input. */
    placeholder?: string

    /**
     * The html input type.
     * @default text
     */
    type?: "text" | "password" | "number"

    /** Displays a unit on the right of the input. */
    unit?: string

    /** The value of the input. */
    value?: string
}

const defaultProps: Partial<InputProps> = {
    type: "text"
}

const _Input: React.StatelessComponent<InputProps> = (props) => {
    const {
        as,
        className,
        children,
        basic,
        disabled,
        autofocus,
        error,
        icon,
        name,
        onChange,
        onIconClicked,
        placeholder,
        type,
        unit,
        value,
        ...rest
    } = props

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        if (!onChange || disabled) {
            return
        }

        onChange(event.currentTarget.value, event, props)
    }

    const ElementType = getElementType(as, "div")

    const inputClasses = cx(
        prefix("input__field"),
        { [prefix("input__field--has-value")]: !basic && value && value.length > 0 },
        { [prefix("input__field--error")]: error },
        { [prefix("input__field--number")]: type === "number" },
        { [prefix("input__field--no-label")]: basic || placeholder === undefined },
        { [prefix("input__field--with-icon")]: !!icon }
    )

    const floatingPlaceholderClasses = cx(prefix("input__label"), { [prefix("input__label--with-icon")]: !!icon })

    const iconClasses = cx(
        prefix("input__icon"),
        { [prefix("input__icon--error")]: error },
        { [prefix("input__icon--clickable")]: onIconClicked }
    )

    const renderIcon = (iconName: IconProps["name"]) => {
        return <Icon name={iconName} className={iconClasses} />
    }

    const buttonIconClasses = cx({ [prefix("input__button-icon")]: onIconClicked })

    return (
        <ElementType className={className} {...rest}>
            <label className={prefix("input")}>
                <input
                    className={inputClasses}
                    disabled={disabled}
                    autoFocus={autofocus}
                    name={name}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required={true}
                    spellCheck={false}
                    type={type}
                    value={value}
                />
                {!basic && <span className={floatingPlaceholderClasses}>{placeholder}</span>}
                {icon &&
                    (onIconClicked ? (
                        <button
                            type="button"
                            className={buttonIconClasses}
                            {...{
                                onClick: onIconClicked
                            }}
                        >
                            {renderIcon(icon)}
                        </button>
                    ) : (
                        renderIcon(icon)
                    ))}
                {unit && !icon && <span className={prefix("input__unit")}>{unit}</span>}
                {children}
            </label>
        </ElementType>
    )
}

_Input.defaultProps = defaultProps

/**
 * An Input is a field used to elicit a textual response from a user.
 * @see Icon
 * @see Checkbox
 * @see TextArea
 * @see Select
 */
export const Input = _Input as React.StatelessComponent<InputProps>
