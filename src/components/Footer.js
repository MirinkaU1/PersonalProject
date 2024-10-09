"use client";

import React from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const CustomFooter = () => {
  return (
    <Footer container className="rounded-none">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/"
              src="./img/logo_transparent/logo_transparent_4.png"
              alt="Multiple Store Logo"
              name="Multiple Store"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="À propos" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Multiple Store</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Suivez-nous" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Légal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Politique de confidentialité</Footer.Link>
                <Footer.Link href="#">Conditions d'utilisation</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Multiple Store" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className="transition duration-300 ease-in-out"
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;
