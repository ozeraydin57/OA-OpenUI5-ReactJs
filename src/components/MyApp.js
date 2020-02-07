import React, { Component } from 'react'
// import { Card, Text } from '@ui5/webcomponents-react'
// import { spacing } from '@ui5/webcomponents-react-base'

export default class MyApp extends Component {
    handleClick = () => {
        alert("başlık tıklandı");
    }

    render() {
        return (
            <div>
                {/* <Card
                    heading="Card bura aga"
                    subtitle="deneme" style={{ width: "300px" }}
                    headerInteractive
                    onHeaderClick={this.handleClick}
                >

                    <Text style={spacing.sapUiContentPadding}>Kontent burası</Text>

                </Card> */}
            </div>
        )
    }
}
