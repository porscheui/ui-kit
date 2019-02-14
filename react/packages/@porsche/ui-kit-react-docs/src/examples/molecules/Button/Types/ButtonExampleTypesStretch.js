import React from "react"
import { Spacing, Button, Grid } from "@porsche/ui-kit-react"

const ButtonExampleTypesStretch = () => {
    return (
        <div>
            <Grid>
                <Grid.Child size={3}>
                    <Button stretch>Default Button</Button>
                </Grid.Child>

                <Grid.Child size={3}>
                    <Button stretch type="highlight">
                        Highlight Button
                    </Button>
                </Grid.Child>

                <Grid.Child size={3}>
                    <Button stretch type="sales">
                        Sales Button
                    </Button>
                </Grid.Child>
            </Grid>

            <Spacing paddingTop={18}>
                <Grid>
                    <Grid.Child size={3}>
                        <Button stretch type="ghost">
                            Ghost Button
                        </Button>
                    </Grid.Child>

                    <Grid.Child size={3}>
                        <Button stretch type="sales-ghost">
                            Sales-Ghost Button
                        </Button>
                    </Grid.Child>
                </Grid>
            </Spacing>

            <div style={{ background: "black", padding: "16px", marginTop: "16px" }}>
                <Grid>
                    <Grid.Child size={3}>
                        <Button stretch inverted>
                            Default Inverted Sretched Button
                        </Button>
                    </Grid.Child>

                    <Grid.Child size={3}>
                        <Button stretch inverted type="highlight">
                            Highlight Inverted Sretched Button
                        </Button>
                    </Grid.Child>

                    <Grid.Child size={3}>
                        <Button stretch inverted type="sales">
                            Sales Inverted Sretched Button
                        </Button>
                    </Grid.Child>
                </Grid>
                <Spacing marginTop={18}>
                    <Grid>
                        <Grid.Child size={3}>
                            <Button stretch inverted type="ghost">
                                Ghost Inverted Sretched Button
                            </Button>
                        </Grid.Child>

                        <Grid.Child size={3}>
                            <Button stretch inverted type="sales-ghost">
                                Sales-Ghost Inverted Sretched Button
                            </Button>
                        </Grid.Child>
                    </Grid>
                </Spacing>
            </div>
        </div>
    )
}

export default ButtonExampleTypesStretch
