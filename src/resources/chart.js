import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';

function Chart() {

    ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

    const data={
        labels:['January', 'February', 'March', 'April', 'May', 'June', 'July','july','august','september','october','november','december'],
        datasets:[
                
                 {
                    label: 'income',
                    data: [20,30,10,100,50,30,15,45,20,12,10,56,58],
                    backgroundColor: '#0acf97',
                  },
                  {
                    label: 'expenses',
                    data:[10,30,70,90,40,60,18,10,8,12,14,15,8],
                    backgroundColor: '#6c757d',
                  },
            
        ],
      }
    return (
        <div className='mt-16'>
            <Bar data={data} />
        </div>
    );
}

export default Chart;