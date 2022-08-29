import Image from "next/image";
import Button from "src/components/parts/Button";
import ButtonRounded from "src/components/parts/Button/ButtonRounded";
import Container from "src/components/parts/Container";
import Flex from "src/components/parts/Flex";
import Nav from "src/components/parts/Nav";
import { company, SNS } from "src/contents/common";
import { fnav } from "src/contents/footer";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-main bg-main w-full">
      <Container className="mb-8 w-max text-center md:w-auto md:text-left">
        <Flex className="justify-between">
          <div className="text-3xl font-en" style={{fontFamily: 'Cookie'}}>RING RING</div>
          <div>
            <div className="mb-4">{company.address}</div>
            <div className="flex justify-center mb-4 md:justify-start">
              {SNS && SNS.map(item => (
                <div key={item.id} className="pr-4"><a href={item.href} target="_blank" rel="noreferrer">
                  <Image
                    src={item.src}
                    width={40}
                    height={40}
                    alt={item.linkText}
                  />
                </a></div>
              ))}
            </div>
            <div><ButtonRounded href="/contact">お問い合わせはこちら</ButtonRounded></div>
          </div>
        </Flex>
      </Container>
      <Container className="mb-8">
          <Nav nav={fnav} />
      </Container>
      <Container>
        <div className="text-sm text-center">&copy; 2022 Ring Ring</div>
      </Container>
    </footer>
  )
}

export default Footer;