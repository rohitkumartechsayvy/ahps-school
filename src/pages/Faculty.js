import React from 'react';
import './../App.css';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Link } from 'react-router-dom';

function Faculty() {
  return (
    <div className="faculty">
      {/* <!-- Start Page Title Area --> */}
      <div className="banner-area testimonials">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="page-title-content">
                <h2>Faculty</h2>
                <ul>
                  <li key={`icon1`}>
                    <Link to=''>Home</Link>
                    <i className="flaticon-fast-forward"></i>
                    <p className="active">Faculty</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Page Title Area --> */}
      <div className="testimonials-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-tittle text-center">
                <h2>Details of Teaching Staff</h2>
                <hr />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">


              <table border="1" cellSpacing="0" cellPadding="0" width="1000px" className="iimm" >
                <tbody><tr>
                  <td width="47" rowspan="2" valign="top"><p align="center"><strong>S.NO</strong></p></td>
                  <td width="105" rowspan="2" valign="top"><p align="center"><strong>NAME</strong></p></td>
                  <td width="84" rowspan="2" valign="top"><p align="center"><strong>DESIGNATION</strong></p></td>
                  <td width="72" rowspan="2" valign="top"><p align="center"><strong>D.O.B</strong></p></td>
                  <td width="164" colspan="3" valign="top"><p align="center"><strong>QUALIFICATION</strong></p></td>
                  <td width="72" rowspan="2" valign="top"><p align="center"><strong>TOTAL NO. OF    PERIODS</strong></p></td>
                </tr>
                  <tr>
                    <td width="50" valign="top"><p align="center"><strong>UG</strong></p></td>
                    <td width="60" valign="top"><p align="center"><strong>PG</strong></p></td>
                    <td width="55" valign="top"><p align="center"><strong>OTHER</strong></p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>1.</p></td>
                    <td width="105" valign="top"><p>MS.    VANDANA SHARMA</p></td>
                    <td width="84" valign="top"><p align="center">Principal</p></td>
                    <td width="72" valign="top"><p>12.05.1976</p></td>
                    <td width="50" valign="top"><p align="center">B.Sc</p></td>
                    <td width="60" valign="top"><p align="center">M. Sc</p></td>
                    <td width="55" valign="top"><p align="center">B.Ed</p></td>
                    <td width="72" valign="top"><p align="center">18</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>2.</p></td>
                    <td width="105" valign="top"><p>MS.    VIBHA GURUNG</p></td>
                    <td width="84" valign="top"><p align="center">Vice Principal</p></td>
                    <td width="72" valign="top"><p>22.09.1978</p></td>
                    <td width="50" valign="top"><p align="center">B.Sc</p></td>
                    <td width="60" valign="top"><p align="center">M.Sc</p></td>
                    <td width="55" valign="top"><p align="center">B.Ed</p></td>
                    <td width="72" valign="top"><p align="center">24</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>3.</p></td>
                    <td width="105" valign="top"><p>MR.    RAVINDER&nbsp; SHARMA</p></td>
                    <td width="84" valign="top"><p align="center">PGT ( HISTORY)</p></td>
                    <td width="72" valign="top"><p>04/03/1971</p></td>
                    <td width="50" valign="top"><p align="center">B.A.</p></td>
                    <td width="60" valign="top"><p>M.A</p></td>
                    <td width="55" valign="top"><p align="center">B.ED</p></td>
                    <td width="72" valign="top"><p align="center">&nbsp;</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>4.</p></td>
                    <td width="105" valign="top"><p>MS.    SONIA</p></td>
                    <td width="84" valign="top"><p align="center">PGT ( SOCIOLOGY)</p></td>
                    <td width="72" valign="top"><p>14/04/1975</p></td>
                    <td width="50" valign="top"><p align="center">B. A.</p></td>
                    <td width="60" valign="top"><p align="center">M. A.</p></td>
                    <td width="55" valign="top"><p align="center">M. Ed/ M. Phil</p></td>
                    <td width="72" valign="top"><p align="center">&nbsp;</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>5.</p></td>
                    <td width="105" valign="top"><p>MS.    SHAFALI</p></td>
                    <td width="84" valign="top"><p align="center">PGT (PSYCHOLOGY)</p></td>
                    <td width="72" valign="top"><p>08/11/1992</p></td>
                    <td width="50" valign="top"><p align="center">B. A.</p></td>
                    <td width="60" valign="top"><p>M.    A.</p></td>
                    <td width="55" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="72" valign="top"><p align="center">&nbsp;</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>6.</p></td>
                    <td width="105" valign="top"><p>MS.    SHILPA KAPOOR</p></td>
                    <td width="84" valign="top"><p align="center">PGT ( GEOGRAPHY)</p></td>
                    <td width="72" valign="top"><p>28.10.1990</p></td>
                    <td width="50" valign="top"><p align="center">B.A</p></td>
                    <td width="60" valign="top"><p align="center">M.A</p></td>
                    <td width="55" valign="top"><p align="center"><strong>B.Ed / HP (TET-</strong><strong>Qualified)</strong><strong> </strong></p></td>
                    <td width="72" valign="top"><p align="center">&nbsp;</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>7.</p></td>
                    <td width="105" valign="top"><p>MS.    ANURADHA <br />
                        SHARAM</p></td>
                    <td width="84" valign="top"><p align="center">PGT ( ENGLISH)</p></td>
                    <td width="72" valign="top"><p>16/05/1978</p></td>
                    <td width="50" valign="top"><p>B.    B. A.</p></td>
                    <td width="60" valign="top"><p align="center">M. A. / M. PHILL</p></td>
                    <td width="55" valign="top"><p align="center">B. ED (TET)</p></td>
                    <td width="72" valign="top"><p align="center">36</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>8.</p></td>
                    <td width="105" valign="top"><p>MR.    KAMAL KUMAR</p></td>
                    <td width="84" valign="top"><p align="center">P.G.T.<br />
                          (MATH)</p></td>
                    <td width="72" valign="top"><p>13.06.1985</p></td>
                    <td width="50" valign="top"><p align="center">B.A.</p></td>
                    <td width="60" valign="top"><p align="center">M.A.</p></td>
                    <td width="55" valign="top"><p align="center">B.ED</p></td>
                    <td width="72" valign="top"><p align="center">36</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>9.</p></td>
                    <td width="105" valign="top"><p>MR.    SANJEET SINGH</p></td>
                    <td width="84" valign="top"><p align="center">PGT ( PHYSICS)</p></td>
                    <td width="72" valign="top"><p>28/12/1986</p></td>
                    <td width="50" valign="top"><p align="center">B.SC.</p></td>
                    <td width="60" valign="top"><p align="center">M.SC.</p></td>
                    <td width="55" valign="top"><p align="center">B. ED (CTET)</p></td>
                    <td width="72" valign="top"><p align="center">36</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>10</p></td>
                    <td width="105" valign="top"><p>MR.    SUJEET CHOUDHARI</p></td>
                    <td width="84" valign="top"><p align="center">PGT ( CHEMISTRY)</p></td>
                    <td width="72" valign="top"><p>03/07/1983</p></td>
                    <td width="50" valign="top"><p align="center">B. SC</p></td>
                    <td width="60" valign="top"><p align="center">M.SC</p></td>
                    <td width="55" valign="top"><p>E.    ED (CTET)</p></td>
                    <td width="72" valign="top"><p align="center">36</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>11</p></td>
                    <td width="105" valign="top"><p>MR.    MANOJ RAI</p></td>
                    <td width="84" valign="top"><p align="center">PGT ( BIO)</p></td>
                    <td width="72" valign="top"><p>01/07/1990</p></td>
                    <td width="50" valign="top"><p align="center">B. SC</p></td>
                    <td width="60" valign="top"><p align="center">M. SC</p></td>
                    <td width="55" valign="top"><p>B.    ED</p></td>
                    <td width="72" valign="top"><p align="center">36</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>12</p></td>
                    <td width="105" valign="top"><p>MS    SUDEEP</p></td>
                    <td width="84" valign="top"><p align="center">COMMERCE</p></td>
                    <td width="72" valign="top"><p>07/09/1978</p></td>
                    <td width="50" valign="top"><p align="center">B. COM</p></td>
                    <td width="60" valign="top"><p align="center">M. COM</p></td>
                    <td width="55" valign="top"><p>&nbsp;</p></td>
                    <td width="72" valign="top"><p align="center">32</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>13</p></td>
                    <td width="105" valign="top"><p>MR.    RAMAN</p></td>
                    <td width="84" valign="top"><p align="center">PGT ( COM)</p>

                    </td><td width="72" valign="top"><p>19/03/1978</p></td>
                    <td width="50" valign="top"><p align="center">B. COM</p></td>
                    <td width="60" valign="top"><p align="center">M. COM</p></td>
                    <td width="55" valign="top"><p>UGC</p></td>
                    <td width="72" valign="top"><p align="center">28</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>14</p></td>
                    <td width="105" valign="top"><p>Mr.    TARUN KUMAR</p></td>
                    <td width="84" valign="top"><p align="center">TGT (LIB)</p></td>
                    <td width="72" valign="top"><p>&nbsp;</p></td>
                    <td width="50" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="60" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="55" valign="top"><p>&nbsp;</p></td>
                    <td width="72" valign="top"><p align="center">22</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>15</p></td>
                    <td width="105" valign="top"><p>MR.    SACHIN SHARMA</p></td>
                    <td width="84" valign="top"><p align="center">DP </p></td>
                    <td width="72" valign="top"><p>12/05/1981</p></td>
                    <td width="50" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="60" valign="top"><p align="center">M.P.ED</p></td>
                    <td width="55" valign="top"><p>&nbsp;</p></td>
                    <td width="72" valign="top"><p align="center">32</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>16.</p></td>
                    <td width="105" valign="top"><p>MS. ANURADHA</p></td>
                    <td width="84" valign="top"><p align="center">T.G.T. (HINDI)<br />
                            (LT)</p></td>
                    <td width="72" valign="top"><p>05.01.1975</p></td>
                    <td width="50" valign="top"><p align="center">B.A</p></td>
                    <td width="60" valign="top"><p align="center">M.A</p></td>
                    <td width="55" valign="top"><p>B.Ed/M.Ed <strong>(TET-</strong><strong>Qualified)    M. Phil</strong></p></td>
                    <td width="72" valign="top"><p align="center">36</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>17.</p></td>
                    <td width="105" valign="top"><p>MS.    MAHIMA SINGH</p></td>
                    <td width="84" valign="top"><p align="center">TGT ( ENGLSIH)</p></td>
                    <td width="72" valign="top"><p>03/07/1982</p></td>
                    <td width="50" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="60" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="55" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="72" valign="top"><p align="center">36</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>18.</p></td>
                    <td width="105" valign="top"><p>MS.    MADHURI</p></td>
                    <td width="84" valign="top"><p align="center">TGT</p></td>
                    <td width="72" valign="top"><p>15/04/1990</p></td>
                    <td width="50" valign="top"><p align="center">B.SC</p></td>
                    <td width="60" valign="top"><p align="center">M. SC.</p></td>
                    <td width="55" valign="top"><p align="center">B. ED</p></td>
                    <td width="72" valign="top"><p align="center">&nbsp;</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>19.</p></td>
                    <td width="105" valign="top"><p>MS.    ARTI</p></td>
                    <td width="84" valign="top"><p align="center">T.G.T. </p></td>
                    <td width="72" valign="top"><p>02.06.1988</p></td>
                    <td width="50" valign="top"><p align="center">B.Sc</p></td>
                    <td width="60" valign="top"><p align="center">M. Sc</p></td>
                    <td width="55" valign="top"><p align="center">B.Ed / C TET, H. P.TET</p></td>
                    <td width="72" valign="top"><p align="center">36</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>20.</p></td>
                    <td width="105" valign="top"><p>MS.    MEENAKSHI THAPA</p></td>
                    <td width="84" valign="top"><p align="center">P. R.T.</p></td>
                    <td width="72" valign="top"><p>26/12/1980</p></td>
                    <td width="50" valign="top"><p align="center">B. A.</p></td>
                    <td width="60" valign="top"><p>M.    C.A (IT)</p></td>
                    <td width="55" valign="top"><p align="center">B. Ed</p></td>
                    <td width="72" valign="top"><p align="center">36</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>21.</p></td>
                    <td width="105" valign="top"><p>MS. RAJNI BHARDWAJ</p></td>
                    <td width="84" valign="top"><p align="center">P.R.T</p></td>
                    <td width="72" valign="top"><p>12.01.1975</p></td>
                    <td width="50" valign="top"><p align="center">B.CA</p></td>
                    <td width="60" valign="top"><p align="center">M.CA</p></td>
                    <td width="55" valign="top"><p align="center">B. Ed.</p></td>
                    <td width="72" valign="top"><p align="center">36</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>22.</p></td>
                    <td width="105" valign="top"><p>MS.    ANKITA RANA</p></td>
                    <td width="84" valign="top"><p align="center">P.R.T.</p></td>
                    <td width="72" valign="top"><p>22/06/1993</p></td>
                    <td width="50" valign="top"><p align="center">B. A</p></td>
                    <td width="60" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="55" valign="top"><p align="center">B. ED ( CTET)</p></td>
                    <td width="72" valign="top"><p align="center">34</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>23.</p></td>
                    <td width="105" valign="top"><p>MS.    RISHTA GURUNG</p></td>
                    <td width="84" valign="top"><p align="center">P.R.T.</p></td>
                    <td width="72" valign="top"><p>01/08/1987</p></td>
                    <td width="50" valign="top"><p align="center">B. A.</p></td>
                    <td width="60" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="55" valign="top"><p align="center">B. ED (TET)</p></td>
                    <td width="72" valign="top"><p align="center">36</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>24.</p></td>
                    <td width="105" valign="top"><p>MS.    SHRUTI SHARMA</p></td>
                    <td width="84" valign="top"><p align="center">P.R.T</p></td>
                    <td width="72" valign="top"><p>16.07.1982</p></td>
                    <td width="50" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="60" valign="top"><p align="center">MBA</p></td>
                    <td width="55" valign="top"><p align="center">B.Ed</p></td>
                    <td width="72" valign="top"><p align="center">36</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>25.</p></td>
                    <td width="105" valign="top"><p>MS.    CHEERING LAMO</p></td>
                    <td width="84" valign="top"><p align="center">P.R.T</p></td>
                    <td width="72" valign="top"><p>26.01.1992</p></td>
                    <td width="50" valign="top"><p align="center">B.A</p></td>
                    <td width="60" valign="top"><p align="center">M.A</p></td>
                    <td width="55" valign="top"><p align="center">B.Ed </p></td>
                    <td width="72" valign="top"><p align="center">36</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>26</p></td>
                    <td width="105" valign="top"><p>MS.    SUCHITA GURUNG</p></td>
                    <td width="84" valign="top"><p align="center">P.R.T.</p></td>
                    <td width="72" valign="top"><p>01/02/2020</p></td>
                    <td width="50" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="60" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="55" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="72" valign="top"><p align="center">35</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>27.</p></td>
                    <td width="105" valign="top"><p>MS.    VANITA JAIKARIA</p></td>
                    <td width="84" valign="top"><p align="center">P.R.T</p></td>
                    <td width="72" valign="top"><p>30.06.1977</p></td>
                    <td width="50" valign="top"><p align="center">B.A</p></td>
                    <td width="60" valign="top"><p align="center">M.A</p></td>
                    <td width="55" valign="top"><p align="center">B.Ed </p></td>
                    <td width="72" valign="top"><p align="center">36</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>28.</p></td>
                    <td width="105" valign="top"><p>MS.    DHRUVA DOGRA</p></td>
                    <td width="84" valign="top"><p align="center">P.R.T.</p></td>
                    <td width="72" valign="top"><p>17/12/1994</p></td>
                    <td width="50" valign="top"><p align="center">B.SC.</p></td>
                    <td width="60" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="55" valign="top"><p align="center">B.ed</p></td>
                    <td width="72" valign="top"><p align="center">36</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>29.</p></td>
                    <td width="105" valign="top"><p>MS.    PALLAVI SHARMA</p></td>
                    <td width="84" valign="top"><p align="center">P. R. T.</p></td>
                    <td width="72" valign="top"><p>14/03/1989</p></td>
                    <td width="50" valign="top"><p align="center">B.SC.</p></td>
                    <td width="60" valign="top"><p align="center">M.SC.</p></td>
                    <td width="55" valign="top"><p align="center">B.ed</p></td>
                    <td width="72" valign="top"><p align="center">36</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>30.</p></td>
                    <td width="105" valign="top"><p>MS    SUPREET </p></td>
                    <td width="84" valign="top"><p align="center">P. R.T</p></td>
                    <td width="72" valign="top"><p>01/04/1986</p></td>
                    <td width="50" valign="top"><p align="center">B. COM</p></td>
                    <td width="60" valign="top"><p align="center">M. COM</p></td>
                    <td width="55" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="72" valign="top"><p align="center">36 </p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>31.</p></td>
                    <td width="105" valign="top"><p>MS.    NIDHI CHAUHAN</p></td>
                    <td width="84" valign="top"><p align="center">P.R.T </p></td>
                    <td width="72" valign="top"><p>12/06/1977</p></td>
                    <td width="50" valign="top"><p align="center">B. SC</p></td>
                    <td width="60" valign="top"><p align="center">M. B.A</p></td>
                    <td width="55" valign="top"><p align="center">B. ED</p></td>
                    <td width="72" valign="top"><p align="center">36</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>32.</p></td>
                    <td width="105" valign="top"><p>MR.    SURYA PRAKASH SHARMA</p></td>
                    <td width="84" valign="top"><p align="center">P. R. T.</p></td>
                    <td width="72" valign="top"><p>13/11/1992</p></td>
                    <td width="50" valign="top"><p align="center">Shastri</p></td>
                    <td width="60" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="55" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="72" valign="top"><p align="center">36</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>33</p></td>
                    <td width="105" valign="top"><p>MS.    RISHU RANA</p></td>
                    <td width="84" valign="top"><p align="center">T.G.T</p></td>
                    <td width="72" valign="top"><p>19/02/1990</p></td>
                    <td width="50" valign="top"><p align="center">B. SC</p></td>
                    <td width="60" valign="top"><p align="center">M.SC</p></td>
                    <td width="55" valign="top"><p align="center">B.ED</p></td>
                    <td width="72" valign="top"><p align="center">36</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>35</p></td>
                    <td width="105" valign="top"><p>MONAL    GULERIA</p></td>
                    <td width="84" valign="top"><p align="center">P. R. T.</p></td>
                    <td width="72" valign="top"><p>26/08/1994</p></td>
                    <td width="50" valign="top"><p align="center">B. A.</p></td>
                    <td width="60" valign="top"><p align="center">M. A.</p></td>
                    <td width="55" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="72" valign="top"><p align="center">36</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>35</p></td>
                    <td width="105" valign="top"><p>MS.    NIDHI BHARDWAJ</p></td>
                    <td width="84" valign="top"><p align="center">P. R.T.</p></td>
                    <td width="72" valign="top"><p>06/11/1989</p></td>
                    <td width="50" valign="top"><p align="center">B. A.</p></td>
                    <td width="60" valign="top"><p align="center">M. A.</p></td>
                    <td width="55" valign="top"><p align="center">B. ED</p></td>
                    <td width="72" valign="top"><p align="center">36</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>36.</p></td>
                    <td width="105" valign="top"><p>MR.    NAVEEN SINGH</p></td>
                    <td width="84" valign="top"><p align="center">KARATE INSTRUCTOR</p></td>
                    <td width="72" valign="top"><p>12.07.1987</p></td>
                    <td width="50" valign="top"><p align="center">B.A</p></td>
                    <td width="60" valign="top"><p align="center">M.A</p></td>
                    <td width="55" valign="top"><p align="center">B.Ed</p></td>
                    <td width="72" valign="top">
                      <p align="center">26</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>37.</p></td>
                    <td width="105" valign="top"><p>MR.    RAHUL</p></td>
                    <td width="84" valign="top"><p align="center">SKATING INSTRUCTOR</p></td>
                    <td width="72" valign="top"><p>&nbsp;</p></td>
                    <td width="50" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="60" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="55" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="72" valign="top"><p align="center">24</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>38.</p></td>
                    <td width="105" valign="top"><p>MR.    ARMAAN</p></td>
                    <td width="84" valign="top"><p align="center">MUSIC TEACHER</p></td>
                    <td width="72" valign="top"><p>16/02/1997</p></td>
                    <td width="50" valign="top"><p align="center">B. SC.</p></td>
                    <td width="60" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="55" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="72" valign="top"><p align="center">24</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>39.</p></td>
                    <td width="105" valign="top"><p>MS.    VANDANA THAPA</p></td>
                    <td width="84" valign="top"><p align="center">ART &amp; CRAFT</p></td>
                    <td width="72" valign="top"><p>05/07/1982</p></td>
                    <td width="50" valign="top"><p align="center">B.A.</p></td>
                    <td width="60" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="55" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="72" valign="top"><p align="center">26</p></td>
                  </tr>
                  <tr>
                    <td width="47" valign="top"><p>40.</p></td>
                    <td width="105" valign="top"><p>MS.    SHIVANI</p></td>
                    <td width="84" valign="top"><p align="center">Special Educator</p></td>
                    <td width="72" valign="top"><p>27/01/96</p></td>
                    <td width="50" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="60" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="55" valign="top"><p align="center">&nbsp;</p></td>
                    <td width="72" valign="top"><p align="center">&nbsp;</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Faculty;
