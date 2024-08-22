import { createTheme, MantineProvider } from "@mantine/core";
import { Localization } from "./util/localization";

export function App() {
    return (
        <MantineProvider
            theme={createTheme({
                colors: {
                    primary: [
                        "#faedff",
                        "#edd9f7",
                        "#d8b1ea",
                        "#c286dd",
                        "#ae62d2",
                        "#a24bcb",
                        "#9e3fc9",
                        "#8931b2",
                        "#7b2aa0",
                        "#6b218d",
                    ],
                },
                primaryColor: "primary",
                primaryShade: { dark: 7, light: 2 },
            })}
            defaultColorScheme="dark"
        >
            <Localization></Localization>
        </MantineProvider>
    );
}
