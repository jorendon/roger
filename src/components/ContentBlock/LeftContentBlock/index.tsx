import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";
import {ButtonWrapper} from "../RightContentBlock/styles";
import {Button} from "../../../common/Button";

const LeftContentBlock = ({
  icon,
  title,
  content,
  section,
  t,
  id,
                            button
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const url = 'https://wa.me/573102707593';
  let message='Hola necesito ayuda.'
  let urlFinal =url+`?text=${encodeURI(message)}`;

  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
              <ButtonWrapper>
                {typeof button === "object" &&
                    button.map((item: any, id: number) => {
                      return (
                          <Button
                              key={id}
                              color={item.color}
                              fixedWidth={true}
                              onClick={() => {
                                window.open(urlFinal,'_blank')
                              }

                              }
                          >
                            {t(item.title)}  <img src="/img/icons/whatsapp-logo.png" width="30px" height="30px" />
                          </Button>
                      );
                    })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
