import "./css/base.css"


import ReactDOM from 'react-dom';
import  React from "react";

import Pretty from '@/components/Pretty'


// import 'antd/dist/antd.min.css';

var data:string='[\n\t\'/foo\'\n{\nbaz:baz\n}\n]'

ReactDOM.render(<Pretty data={data.split('\n')}/>,document.getElementById('root'))


