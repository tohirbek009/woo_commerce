import React from "react";
import CommaImg from "../assets/img/comma.png";
import firstImg from "../assets/img/firstPerson.png";
import secondImg from "../assets/img/secondPerson.png";
import thirdImg from "../assets/img/thirdPerson.png";
import fourtImg from "../assets/img/fourthPerson.png";
import fifthImg from "../assets/img/fifthPerson.png";
import sixthImg from "../assets/img/sixthPerson.png";
import DotImg from "../assets/img/dot.png";
import SecondDotImg from "../assets/img/dot2.png";
import LeftIconImg from "../assets/img/leftIcon.png";
import RightIconImg from "../assets/img/rightIcon.png";
import PeopleImg from "../assets/img/people.png";
import PeopleBackImg from "../assets/img/peopleBack.png";
import VectorImg from "../assets/img/vector.png";
import Union1 from "../assets/img/union1.png";
import Union2 from "../assets/img/union2.png";
import Logo from "../assets/img/LOGO.png";
import Facebook from "../assets/img/facebook.png";
import Twitter from "../assets/img/twitter.png";
import Instagram from "../assets/img/instagram.png";
import Commerce from "../assets/img/e.png";
import Automatic from "../assets/img/automatic.png";

import {
  CardBack,
  CardFront,
  CardMiddle,
  Cardtext,
  Comma,
  FifthImg,
  FirstImg,
  FourthImg,
  SecondImg,
  SixthImg,
  StoreBack,
  StoreTitle,
  ThirdImg,
  Dot,
  SecondDot,
  LeftIcon,
  RightIcon,
  TitleIn,
  PeoplePicture,
  LeftDot,
  RightDot,
  PeopleBack,
  CommerceBack,
  CommerceText,
  Button,
  ButtonText,
  Footer,
  Aline,
  AlineIn,
  Vector,
  Vectortext,
  LogoImg,
  Line,
  Activity,
  ActivityItem,
  ItemColumn,
  FooterTag,
  Icons,
  Icon,
  Copyright,
  Auto,
  Link,
  VectorIn,
} from "./style";

const Store = () => {
  return (
    <div>
      <StoreBack>
        <StoreTitle>
          Trusted by Agencies <br /> & Store Owners
        </StoreTitle>

        <CardBack></CardBack>
        <CardMiddle></CardMiddle>
        <CardFront>
          <Comma src={CommaImg} />
          <Cardtext>
            No other eCommerce platform allows people to start for free and grow
            their store as their business grows. More importantly, WooCommerce
            doesn't charge you a portion of your profits as your business grows!
          </Cardtext>
        </CardFront>
        <FirstImg src={firstImg} />
        <SecondImg src={secondImg} />
        <ThirdImg src={thirdImg} />
        <FourthImg src={fourtImg} />
        <FifthImg src={fifthImg} />
        <SixthImg src={sixthImg} />
        <Dot src={DotImg} />
        <SecondDot src={SecondDotImg} />
        <LeftIcon src={LeftIconImg} />
        <RightIcon src={RightIconImg} />
      </StoreBack>
      <StoreTitle>Supported by real people</StoreTitle>
      <TitleIn>
        Our team of Happiness Engineers works remotely from 58 countries <br />
        providing customer support across multiple time zones.
      </TitleIn>
      <PeoplePicture src={PeopleImg} />
      <PeopleBack src={PeopleBackImg} />
      <LeftDot src={DotImg} />
      <RightDot src={SecondDotImg} />
      <CommerceBack>
        <CommerceText>
          WooCommerce - the{" "}
          <VectorIn>
            most customizable eCommerce <br /> platform
          </VectorIn>{" "}
          for building <VectorIn>your online business.</VectorIn>
        </CommerceText>
        <Button>
          <ButtonText>GET STARTED</ButtonText>
        </Button>
      </CommerceBack>
      <Footer>
        <Aline>
          <AlineIn>
            <Vector src={VectorImg} />
            <Vectortext>
              30 day <VectorIn>money back guarantee</VectorIn>
            </Vectortext>
          </AlineIn>
          <AlineIn>
            <Vector src={Union1} />
            <Vectortext>
              <VectorIn>Support</VectorIn> teams across the world
            </Vectortext>
          </AlineIn>
          <AlineIn>
            <Vector src={Union2} />
            <Vectortext>
              {" "}
              <VectorIn>Safe & Secure</VectorIn> online payment
            </Vectortext>
          </AlineIn>
        </Aline>
        <LogoImg src={Logo} />
        <Line></Line>
        <Aline>
          <ItemColumn>
            <Activity>Who we Are</Activity>
            <ActivityItem href={"#"}>About</ActivityItem>
            <ActivityItem href={"#"}>Team</ActivityItem>
            <ActivityItem href={"#"}>Work With Us</ActivityItem>
          </ItemColumn>
          <ItemColumn>
            <Activity>Who we Are</Activity>
            <ActivityItem href={"#"}>Features</ActivityItem>
            <ActivityItem href={"#"}>Payment</ActivityItem>
            <ActivityItem href={"#"}>Marketing</ActivityItem>
            <ActivityItem href={"#"}>Shipping</ActivityItem>
            <ActivityItem href={"#"}>Extension Store</ActivityItem>
            <ActivityItem href={"#"}>eCommerce blog</ActivityItem>
            <ActivityItem href={"#"}>Mobile App</ActivityItem>
            <ActivityItem href={"#"}>Community</ActivityItem>
            <ActivityItem href={"#"}>Style Guide</ActivityItem>
            <ActivityItem href={"#"}>Email Newsletter</ActivityItem>
          </ItemColumn>
          <ItemColumn>
            <Activity>Who we Are</Activity>
            <ActivityItem href={"#"}>StoreFront</ActivityItem>
            <ActivityItem href={"#"}>WooSlider</ActivityItem>
            <ActivityItem href={"#"}>Sensei</ActivityItem>
            <ActivityItem href={"#"}>Sensei Extention</ActivityItem>
          </ItemColumn>
          <ItemColumn>
            <Activity>Who we Are</Activity>
            <ActivityItem href={"#"}>Documentation</ActivityItem>
            <ActivityItem href={"#"}>Custumization</ActivityItem>
            <ActivityItem href={"#"}>Suppot Policy</ActivityItem>
            <ActivityItem href={"#"}>Contact</ActivityItem>
            <ActivityItem href={"#"}>Covid-19 Resource</ActivityItem>
            <ActivityItem href={"#"}>Privacy Notice for</ActivityItem>
            <ActivityItem href={"#"}>California Users</ActivityItem>
          </ItemColumn>
          <ItemColumn>
            <Activity>Who we Are</Activity>
            <ActivityItem href={"#"}>WooExperts</ActivityItem>
            <ActivityItem href={"#"}>Hosting Solution</ActivityItem>
            <ActivityItem href={"#"}>Pre-Sale FAQ</ActivityItem>
            <ActivityItem href={"#"}>Succes Stories</ActivityItem>
            <ActivityItem href={"#"}>Design Feedback Group</ActivityItem>
          </ItemColumn>
        </Aline>
      </Footer>
      <FooterTag>
        <Icons>
          <Link href={"#"}>
            <Icon src={Twitter} />
          </Link>
          <Link href={"#"}>
            <Icon src={Facebook} />
          </Link>
          <Link href={"#"}>
            <Icon src={Instagram} />
          </Link>
          <Link href={"#"}>
            <Icon src={Commerce} />
          </Link>
        </Icons>
        <Copyright>
          COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS PRIVACY POLICY
        </Copyright>
        <Auto src={Automatic} />
      </FooterTag>
    </div>
  );
};

export default Store;