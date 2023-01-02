import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import TechnicalReports from '../../../components/ReportsAdmin/TechnicalReports';
import FinancialReports from '../../../components/ReportsAdmin/FinancialReports';
import OtherReports from '../../../components/ReportsAdmin/OtherReports';

export default function Reports(){

    const [Technical , setTechnical] = useState(false)
    const Technicalhandler = (sara)=>{setTechnical(sara)}

    const [Financial , setFinancial] = useState(true)
    const Financialhandler = (sara)=>{setFinancial(sara)}

    const [Other , setOther] = useState(false)
    const Otherhandler = (sara)=>{setOther(sara)}

    const [Reports , setReports] = useState([])
    const Reportshandler = (sara)=>{setReports(sara)}
    useEffect(()=>{Reportshandler(Reports)});

    const [RefundRequests , setRefundRequests] = useState([])
    const RefundRequestshandler = (sara)=>{setRefundRequests(sara)}
    useEffect(()=>{RefundRequestshandler(RefundRequests)});


    const TechnicalBtnHandler = () =>{
        Technicalhandler(true)
        Financialhandler(false)
        Otherhandler(false)
    }


    const FinancialBtnHandler = () =>{
        Technicalhandler(false)
        Financialhandler(true)
        Otherhandler(false)
    }


    const OtherBtnHandler = () =>{
        Technicalhandler(false)
        Financialhandler(false)
        Otherhandler(true)
    }

    useEffect(()=>{GetReports()});
    useEffect(()=>{GetRefundRequests()});


    const GetReports = async(req,res)=>{
        await axios.get(`http://localhost:9000/admin/getAllReports/`).then(
            (res) => {
                const result = res.data
                Reportshandler(result)
            })
}

const GetRefundRequests = async(req,res)=>{
    await axios.get(`http://localhost:9000/admin/getAllRefundReq/`).then(
        (res) => {
            const result = res.data
            RefundRequestshandler(result)
        })
}

    return <div className='Admin_Body'>
        <div>
            <AdminNavBar/>
        </div>
        <br></br>
        <div>
            <h1 className='h1_Admin_Reports'> Reports </h1>
        </div>
        <div className='Admin_ReportsPage_CoursesDiv'>
            <div className='Admin_AllReports_Div_Header'> 
                {!Technical && <button className='Admin_TechnicalReports_btn' onClick={TechnicalBtnHandler}></button>}
                {Technical && <button className='Admin_TechnicalReports_btnClicked' onClick={TechnicalBtnHandler}></button>}
                {!Financial && <button className='Admin_FinancialReports_btn' onClick={FinancialBtnHandler}></button>}
                {Financial && <button className='Admin_FinancialReports_btnClicked' onClick={FinancialBtnHandler}></button>}
                {!Other && <button className='Admin_OtherReports_btn' onClick={OtherBtnHandler}></button>}
                {Other && <button className='Admin_OtherReports_btnClicked' onClick={OtherBtnHandler}></button>}
            </div>
            <div className='Admin_AllReports_Div'>                    
                {Technical && <TechnicalReports Reports = {Reports}/>}
                {Financial && <FinancialReports Reports = {Reports} RefundRequests = {RefundRequests}/>}
                {Other && <OtherReports Reports = {Reports}/>}
            </div>
        </div>
    </div>
}