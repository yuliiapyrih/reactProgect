import React from 'react'
import { Chart } from 'react-charts'

export default function MyChartGo() {
    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [[0, 9], [1, 8], [2, 5], [3, 3], [4, 1]]
            },
            {
                label: 'Series 2',
                data: [[0, 2], [1, 4], [2, 8], [3, 9], [4, 1]]
            },
            {
                label: 'Series 3',
                data: [[9, 3], [1, 7], [2, 4], [3, 2], [4, 1]]
            },
            {
                label: 'Series 4',
                data: [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]
            }
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )

    return (
        // A react-chart hyper-responsively and continuously fills the available
        // space of its parent element automatically
        <div
            style={{
                width: '100%',
                height: '250px',

            }}
        >
            <Chart data={data} axes={axes} />
        </div>
    )
}
