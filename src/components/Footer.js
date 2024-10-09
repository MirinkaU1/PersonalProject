"use client";

import React from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

const CustomFooter = () => {
  return (
    <Footer container className="rounded-none">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/"
              src="https://i.imgur.com/Dn2HXld.png"
              alt="Multiple Store Logo"
              name="Multiple Store"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Contactez-nous" />
              <Footer.LinkGroup col>
                <Footer.Link href="/">Multiple Store</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Suivez-nous" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://api.whatsapp.com/send?phone=%2B2250788000036&context=ARDDTabmXEtRUHJ4zlu--O8hVqxxNGw9WgiFAsyWZ6rygO9cJLLD_aNS4tqqCSf-iySJYI_YvKu-9q0s_sTVVVIReH7nHMTVZ8GWYvMSuynVewDts6kjpiZP-TtOmWEJiWx-dzWFX0xsg6l4O019thqmcA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawFyxNxleHRuA2FlbQIxMAABHW1btClmcbeBbgpXl564PEAE45mRGSudwd2TNwQ5yFH8zNd-l7oFyRFreg_aem_mzjq8HLtJOudtDSUES2X1Q">
                  Whatsapp
                </Footer.Link>
                <Footer.Link href="https://www.facebook.com/multiplesstores">
                  Facebook
                </Footer.Link>
                <Footer.Link href="https://www.instagram.com/multiples_stores/">
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Légal" />
              <Footer.LinkGroup col>
                <Footer.Link href="/privacy">
                  Politique de confidentialité
                </Footer.Link>
                <Footer.Link href="/terms">
                  Conditions d'utilisation
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Multiple Store" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://api.whatsapp.com/send?phone=%2B2250788000036&context=ARDDTabmXEtRUHJ4zlu--O8hVqxxNGw9WgiFAsyWZ6rygO9cJLLD_aNS4tqqCSf-iySJYI_YvKu-9q0s_sTVVVIReH7nHMTVZ8GWYvMSuynVewDts6kjpiZP-TtOmWEJiWx-dzWFX0xsg6l4O019thqmcA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawFyxNxleHRuA2FlbQIxMAABHW1btClmcbeBbgpXl564PEAE45mRGSudwd2TNwQ5yFH8zNd-l7oFyRFreg_aem_mzjq8HLtJOudtDSUES2X1Q"
              icon={BsWhatsapp}
              className="transition duration-300 ease-in-out"
            />
            <Footer.Icon
              href="https://www.facebook.com/multiplesstores"
              icon={BsFacebook}
              className="transition duration-300 ease-in-out"
            />
            <Footer.Icon
              href="https://www.instagram.com/multiples_stores/"
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
