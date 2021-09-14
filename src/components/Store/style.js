import styled, { css } from "styled-components";

const common = css`
  background: #ffffff;
  box-shadow: 0px 18px 52.8537px rgba(215, 228, 249, 0.5);
  border-radius: 20px;
`;
const popular = css`
  font-family: Roboto;
  font-style: normal;
  font-size: 20px;
  line-height: 52px;
  color: #ffffff;
`;

export const StoreBack = styled.div`
  background: linear-gradient(
    180deg,
    rgba(236, 240, 253, 0) 0%,
    rgba(236, 240, 253, 0.53) 14.32%,
    #ecf0fd 45.83%,
    rgba(236, 240, 253, 0.43) 84.33%,
    rgba(236, 240, 253, 0) 100%
  );
`;
export const StoreTitle = styled.div`
  font-family: Circular Std;
  font-style: normal;
  font-weight: bold;
  font-size: 55px;
  line-height: 70px;
  text-align: center;
  margin-top: 138px;
  color: #272d4e;
`;
export const CardBack = styled.div`
  ${common}
  width: 618px;
  height: 331px;
  margin: 211px auto;
  position: relative;
`;
export const CardMiddle = styled.div`
  ${common}
  width:678px;
  height: 363px;
  position: absolute;
  top: 3606px;
  left: 610px;
`;
export const CardFront = styled.div`
  ${common}
  height:391px;
  width: 730px;
  position: absolute;
  top: 3536px;
  left: 584px;
`;
export const Comma = styled.img`
  display: flex;
  justify-content: center;
  margin:20px auto;
`;
export const Cardtext = styled.div`
  font-family: Circular Std;
  font-style: normal;
  font-weight: normal;
  font-size: 26.7px;
  line-height: 39px;
  text-align: center;
  margin-top: -120px;
  color: #94a2b3;
`;
export const FirstImg = styled.img`
  position: absolute;
  top: 3410px;
  left: 391px;
`;
export const SecondImg = styled.img`
  position: absolute;
  top: 3625px;
  left: 102px;
`;
export const ThirdImg = styled.img`
  position: absolute;
  top: 3967px;
  left: 256px;
`;
export const FourthImg = styled.img`
  position: absolute;
  top: 3396px;
  right: 448px;
`;
export const FifthImg = styled.img`
  position: absolute;
  top: 3653px;
  right: 233px;
`;
export const SixthImg = styled.img`
  position: absolute;
  top: 4031px;
  right: 396px;
`;
export const Dot = styled.img`
  position: absolute;
  top: 3875px;
  left: 473px;
  z-index: -1;
`;
export const SecondDot = styled.img`
  position: absolute;
  top: 3594px;
  right: 467px;
  z-index: -1;
`;
export const LeftIcon = styled.img`
  position: absolute;
  top: 4051px;
  right: 684px;
`;
export const RightIcon = styled.img`
  position: absolute;
  top: 4055px;
  right: 764px;
`;
export const TitleIn = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  margin-top: 31px;
  color: #94a2b3;
`;
export const PeoplePicture = styled.img`
  display: flex;
  justify-content: center;
  margin: auto;
`;
export const PeopleBack = styled.img`
  position: absolute;
  top: 4458px;
  left: 173px;
  z-index: -1;
`;
export const LeftDot = styled.img`
  position: absolute;
  left: 83px;
  top: 4609px;
  z-index: -1;
`;
export const RightDot = styled.img`
  position: absolute;
  top: 4561px;
  right: 144px;
  z-index: -2;
`;
export const CommerceBack = styled.div`
  background: #5f37ef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 261px;
`;
export const CommerceText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 52px;
margin-left: 470px;
  color: #ffffff;
`;
export const Button = styled.button`
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 60px;
  height: 72px;
  width: 207px;
  background-color: #5f37ef;
  cursor: pointer;
  margin-right: 321px;
`;
export const ButtonText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
`;
export const Footer = styled.div`
  background: #7854f7;
  padding: 45px;
`;
export const Aline = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 345px;
`;
export const AlineIn = styled.div`
  display: flex;
  align-items: center;
`;
export const Vector = styled.img`
  width: 41px;
  height: 41px;
`;
export const Vectortext = styled.div`
  ${popular}
  font-weight: normal;
  margin-left: 19px;
`;
export const VectorIn = styled.span`
  font-weight: 1000;
`;
export const LogoImg = styled.img`
  display: flex;
  justify-content: center;
  margin: 135px auto;
`;
export const Line = styled.div`
  width: 1480px;
  height: 2px;
  background-color: white;
  display: flex;
  justify-content: center;
  margin: -60px auto;
`;
export const Activity = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 52px;
  text-transform: uppercase;

  color: #ffffff;
`;
export const ActivityItem = styled.a`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  color: #ffffff;
  display: flex;
  text-decoration: none;
`;
export const ItemColumn = styled.div`
  margin-top: 80px;
`;
export const FooterTag = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 220px;
  height: 40px;
  align-items: center;
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
`;
export const Link = styled.a``;
export const Icon = styled.img`
  width: 24px;
  height: 20px;
  margin-right: 40px;
`;
export const Copyright = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  text-align: center;

  color: #272d4e;
`;
export const Auto = styled.img`
  width: 183px;
  height: 14px;
`;


  