import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from "flowbite-react";
  import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
  
  export default function FooterComp() {
    return (
      <Footer container className="bg-black text-white">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <FooterBrand
                href="/"
                name="IndoreConnect"
                className="text-white"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle title="about" className="text-white"/>
                <FooterLinkGroup col>
                  <FooterLink href="/" className="text-white">Home</FooterLink>
                  <FooterLink href="about" className="text-white">About</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Follow us" className="text-white"/>
                <FooterLinkGroup col>
                  <FooterLink href="#" className="text-white">Github</FooterLink>
                  <FooterLink href="#" className="text-white">Discord</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Legal" className="text-white"/>
                <FooterLinkGroup col>
                  <FooterLink href="#" className="text-white">Privacy Policy</FooterLink>
                  <FooterLink href="#" className="text-white">Terms &amp; Conditions</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-between text-white">
            <FooterCopyright href="#" by="IMC™" year={2022} className="text-white"/>
            <div className="mt-`2 4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" className="text-white" icon={BsFacebook} />
              <FooterIcon href="#" className="text-white" icon={BsInstagram} />
              <FooterIcon href="#" className="text-white" icon={BsTwitter} />
              <FooterIcon href="#" className="text-white" icon={BsGithub} />
              <FooterIcon href="#" className="text-white" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </Footer>
    );
  }