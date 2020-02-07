import React, { Component, } from 'react'
import { Card, Icon } from '@ui5/webcomponents-react'
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import '@ui5/webcomponents-icons/dist/icons/line-chart.js';
import '@ui5/webcomponents-icons/dist/icons/horizontal-bar-chart.js';

export default class MyChart extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            chart: "barChart"
        }
    }

    handleHeaderClick = () => {
        this.setState({ loading: true })
        let chartSec = "lineChart";
        if (this.state.chart === "barChart")
            chartSec = "lineChart";
        else
            chartSec = "barChart";

        setTimeout(() => {
            this.setState({ chart: chartSec, loading: false })
        }, (2000));
    };

    render() {
        const datasets = [{
            label: "Stock Price",
            data: [65, 59, 80, 81, 56, 55, 40]
        }];
        const labels = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July"
        ];

        return (
            <div>
                <Card
                    avatar={<Icon name={this.state.chart === "lineChart" ? "line-chart" : "horizontal-bar-chart"} />}
                    heading="Card grafikler"
                    subtitle="tıklayarak değiştirin"
                    style={{ width: "300px" }}
                    headerInteractive
                    onHeaderClick={this.handleHeaderClick} >

                    {
                        this.state.chart === "lineChart" ?
                            <LineChart datasets={datasets} labels={labels} loading={this.state.loading} />
                            :
                            <BarChart datasets={datasets} labels={labels} loading={this.state.loading} />
                    }
                </Card>
            </div>
        )
    }
}