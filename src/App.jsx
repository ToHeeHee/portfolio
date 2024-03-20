import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="/src/assets/d.jpg" />

        <Title title="Supanat Patthanang (Toh)">
          <h3>ตำแหน่ง : นักศึกษา</h3>
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2002/09/26").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66981985721
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : supanat.patthanang@gmail.com</p>
          <p>33/75 ซ.เทียนทะเล 7 ถนนบางขุนเทียน เเขวงแสมดำ เขตบางขุนเทียน กรุงเทพมหานคร 10150</p>
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p>ชื่อ: ศุภณัฐ ปัดฐานัง ชื่อเล่น: โต้</p>
          <p>เป็นนักศึกษาชั้นปีที่3 สาขาเทคโนโลยรสารสนเทศ มหาวิทยาลัยราชภัฏสวนสุนันทา</p>
          <p>อายุ: 22ปี สัญชาติ: ไทย</p>
          
        </Title>

        <Title title="Work Experience">
          <p>จัดทำโปรเจคสื่อโซเชียลมีเดียรูปแบบ metaverse เรื่องการอนุรักษ์สัตว์ป่าและพืชพันธุ์</p>
        </Title>

        <Title title="Skills">
          <p>3D</p>
          <p>Animation</p>
          <p>Excel</p>
          <p>Power point</p>
          <p>Word</p>
        </Title>
      </div>
    </main>
  )
}

export default App
