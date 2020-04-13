import React from "react";
import {
    Footer,
    FooterTab,
    Button,
    Icon,
    Text,
    StyleProvider,
    Content,
} from "native-base";

import getTheme from "../../../native-base-theme/components";
import material from "../../../native-base-theme/variables/material";

const MainFooter = () => {
    return (
        <>
            <Content />
            <StyleProvider style={getTheme(material)}>
                <Footer>
                    <FooterTab>
                        <Button vertical>
                            <Icon
                                ios="ios-journal"
                                android="md-journal"
                                style={{ color: "#F9A69A" }}
                            />
                            <Text>Add Journal</Text>
                        </Button>
                        <Button vertical>
                            <Icon
                                ios="ios-paper"
                                android="md-document"
                                style={{ color: "#F9A69A" }}
                            />
                            <Text>Add Entry</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </StyleProvider>
        </>
    );
};

export default MainFooter;
