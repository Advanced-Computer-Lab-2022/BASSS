import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavBar from '../AdminNavBar/AdminNavBar';
import '../Admin.css';
import MultipleCoursesDiv from '../CoursesAdmin/MultipleCoursesDiv'
import SearchAdminAllCourses from '../../../components/SearchAdminAllCourses/SearchAdminAllCourses';
import PromotionsAdmin from './PromotionsAdmin';
import MultipleCoReqDiv from '../../../components/AdminViewCoReq/MultipleCoReqDiv';

export default function CoursesAdmin(){

    const [DummyVariable , setDummyVariable] = useState('')
    const DummyVariablehandler = ()=>{setDummyVariable(DummyVariable)}

    const [AllCoursesArray , setAllCoursesArray] = useState([])
    const AllCoursesArrayhandler = (sara)=>{setAllCoursesArray(sara)}
    useEffect(()=>{AllCoursesArrayhandler(AllCoursesArray)});

    const [SelectedCourses , setSelectedCourses] = useState([])
    const SelectedCourseshandler = (sara)=>{setSelectedCourses(sara)}
    useEffect(()=>{ SelectedCourseshandler(SelectedCourses)},[SelectedCourses]);

    const [PromotionDiv , setPromotionDiv] = useState(false)
    const PromotionDivhandler = (sara)=>{setPromotionDiv(sara)}

    const [AllCoReqs , setAllCoReqs] = useState([])
    const AllCoReqshandler = (sara)=>{setAllCoReqs(sara)}
    useEffect(()=>{AllCoReqshandler(AllCoReqs)});
    

    
    const [Search , setSearch] = useState(false)
    const Searchhandler = (sara)=>{setSearch(sara)}

    useEffect(()=>{GetCourses()});
    useEffect(()=>{GetCoReqs()});


    const SetPromotionHandler = () =>{
        PromotionDivhandler(true)
    }

    const AcceptAllHandler = async(req,res)=>{
        for(let i = 0 ; i < AllCoReqs.length ; i++){
            if(AllCoReqs[i].Status === 'Unseen'){
                var ReqID = AllCoReqs[i]._id
                alert(ReqID)
                await axios.get(`http://localhost:9000/admin/AcceptCoRequest/${ReqID}`).then(
                    (res) => {
                        const result = res.data
                        DummyVariablehandler(result)
                })
            }
        }
    }

    const RejectAllHandler = async(req,res)=>{
        for(let i = 0 ; i < AllCoReqs.length ; i++){
            if(AllCoReqs[i].Status === 'Unseen'){
                var ReqID = AllCoReqs[i]._id
                alert(ReqID)
                await axios.get(`http://localhost:9000/admin/RejectCoRequest/${ReqID}`).then(
                    (res) => {
                        const result = res.data
                        DummyVariablehandler(result)
                })
            }
        }
    }

    const GetCourses = async(req,res)=>{
        if(!Search){
            await axios.get(`http://localhost:9000/course/`).then(
                (res) => {
                    const result = res.data
                    AllCoursesArrayhandler(result)
                })
            }
    }

    const GetCoReqs = async(req,res)=>{
            await axios.get(`http://localhost:9000/admin/getAllCoReq`).then(
                (res) => {
                    const result = res.data
                    AllCoReqshandler(result)
                })
    }

    // GetCourses();                   ************* DON'T FORGET TO ADD SELECT ALL COURSES  *************

    return <div className='Admin_Body'>
        <div>
            <AdminNavBar/>
        </div>

        <br></br>

        <div className='Admin_CoursesPage_CoursesDiv'>
        
            <br></br>
            {PromotionDiv && <PromotionsAdmin PromotionDivhandler={PromotionDivhandler} SelectedCourses={SelectedCourses}/>}
            <div className='Admin_CorporateCourses_Div'>
                <br></br>
                <h1 className='h1_Admin_Courses'>Corporate Courses</h1>
                <br></br>    
                <div className='Admin_CoursesPage_CoReqHeader_btnDiv'>
                    <button className='Admin_CoReqSelect_btn' onClick={AcceptAllHandler}>Accept All</button>
                    <button className='Admin_CoReqSelect_btn' onClick={RejectAllHandler}>Reject All</button>
                </div>
                <div className='Admin_CorporateCourses_InnerDiv'>
                    <MultipleCoReqDiv AllCoReqs={AllCoReqs} SelectedCourseshandlerProp={SelectedCourseshandler} SelectedCoursesProp={SelectedCourses}/>
                </div>
            </div>
            
            <br></br> 

            <div className='Admin_AllCourses_Div'>
                <br></br>
                <div className='Admin_AllCourses_Div_Header'>
                    <button className='Admin_AddPromtion_btn' onClick={SetPromotionHandler}> Set Promotion</button>
                    <br></br>
                    <h1 className='h1_Admin_AllCourses_Header'>All Courses</h1>
                    <br></br>
                    <div className='Admin_AllCoursesSearch_Div'>
                        <SearchAdminAllCourses AllCoursesArrayhandler={AllCoursesArrayhandler} Searchhandler={Searchhandler}/>
                    </div>
                    <br></br>
                    <button className='Admin_AllCoursesFilter_Div'> Filter</button>
                </div>
                <br></br>
                <div className='Admin_AllCourses_InnerDiv'>
                    <MultipleCoursesDiv AllCoursesArrayProp={AllCoursesArray} SelectedCourseshandlerProp={SelectedCourseshandler} SelectedCoursesProp={SelectedCourses} />
                </div>
            </div>
        </div>
    </div>
}
//AllCoursesArrayProp={AllCoursesArray}