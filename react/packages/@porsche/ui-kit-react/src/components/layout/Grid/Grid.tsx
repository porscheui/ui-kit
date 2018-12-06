import * as React from "react"
import cx from "classnames"

import { getElementType, prefix, BreakpointCustomizable, mapBreakpointPropToClasses } from "../../../lib"
import { GridChild } from "./GridChild"
import { ClassNameProp, ComponentProp } from "../../../lib/props"

export interface Grid extends React.StatelessComponent<GridProps> {
    Child: typeof GridChild
}

export interface GridProps extends ClassNameProp, ComponentProp {
    /** Defines the direction of the main and cross axis. The default "row" (default) defines the main axis as horizontal left to right. */
    direction?: BreakpointCustomizable<"row" | "row-reverse" | "column" | "column-reverse">

    /** Defines the gap between contained children. The value "normal" (default) sets responsive grid spacings that should be used together with Grid.Child. */
    gap?: BreakpointCustomizable<"normal" | "zero">
}

const _Grid: React.StatelessComponent<GridProps> & Partial<Grid> = (props) => {
    const { as, className, children, direction, gap, ...rest } = props

    const ElementType = getElementType(as, "div")

    const classes = cx(
        prefix("grid"),
        mapBreakpointPropToClasses("grid--direction", direction),
        mapBreakpointPropToClasses("grid--gap", gap),
        className
    )

    return (
        <ElementType className={classes} {...rest}>
            {children}
        </ElementType>
    )
}

_Grid.Child = GridChild

/**
 * A grid container component used to create layouts based on official grid definitions.
 * @see Spacing
 * @see Flex
 */
export const Grid = _Grid as Grid
