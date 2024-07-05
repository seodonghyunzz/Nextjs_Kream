export default function Footer(){
    
    return(
        <div className="footerCon">
            <div className="footerWrap">
                <div className="footerTop">
                    <div className="footerTop_1">
                        <ul>
                            <span><h3>이용안내</h3></span>
                            <li><a href="#">검수기준</a></li>
                            <li><a href="#">이용정책</a></li>
                            <li><a href="#">페널티 정책</a></li>
                            <li><a href="#">커뮤니티 가이드라인</a></li>
                        </ul>
                    </div>
                    <div className="footerTop_2">
                        <ul>
                            <span><h3>고객지원</h3></span>
                            <li><a href="#">공지사항</a></li>
                            <li><a href="#">서비스 소개</a></li>
                            <li><a href="#">스토어 안내</a></li>
                            <li><a href="#">판매자 방문접수</a></li>
                        </ul>
                    </div>
                    <div className="footerTop_3">
                        <span><h3>고객센터 1588-7813</h3></span>
                        <span>운영시간 평일 10:00 - 18:00</span>
                        <span>점심시간 평일 13:00 - 14:00</span>
                        <span>1:1 문의하기는 앱에서만 가능합니다.</span>
                        <a href="#"><button>자주 묻는 질문</button></a>
                    </div>
                </div>
                <div className="footerBot">
                    <div className="footerBot_1">
                        <div>
                            <ul>
                                <li><a href="#">회사소개</a></li>
                                <li><a href="#">인재채용</a></li>
                                <li><a href="#">제휴제안</a></li>
                                <li><a href="#">이용약관</a></li>
                                <li><a href="#">개인정보처리방침</a></li>
                            </ul>
                        </div>
                        <div className="footerBot_1_span">
                            <div className="footerBot_1_span_div">
                                <span className="footerBot_1_span1">크림 주식회사 · 대표 김창욱<span className="blankSpan"></span>사업자등록번호 : 570-88-01618 사업자정보확인 <span className="blankSpan"></span>통신판매업 : 제 2021-성남분당C-0093호</span><br/>
                                <span className="footerBot_1_span1">사업장소재지 : 경기도 성남시 분당구 분당내곡로 131 판교테크원 타워1, 8층<span className="blankSpan"></span>호스팅 서비스 : 네이버 클라우드 ㈜</span>
                            </div>
                            <div className="footerBot_1_span_div2">
                                <span className="footerBot_1_span2" >신한은행 채무지급보증 안내</span><br/>
                                <span className="footerBot_1_span3">당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다. <a href="#">서비스가입 사실 확인</a></span>
                            </div>
                            <div>
                                <span className="footerBot_1_span3">크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타 거래 체결 과정에서 고지하는 내용 등에 따라 검수하고 보증하는 내용에 대한 책임은 크림(주)에 있습니다.</span>
                            </div>
                        </div>
                    </div>
                    <div className="footerBot_blank"></div>
                    <div className="footerBot_2">
                        <div className="footerBot_2_logo">
                            <a href="#"><img src="instagramLogo.svg" width={30} height={30}></img></a>
                            <a href="#"> <img src="facebookLogo.svg" width={30} height={30}></img></a>
                            <a href="#"><img src="kakaoLogo.svg" width={30} height={30}></img></a>
                        </div>
                        <div className="blankDiv">
                        </div>
                        <div className="footerBot_2_corp">
                            <span>© KREAM Corp.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
