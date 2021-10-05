import React from 'react';

import { Footer, Sitemap, FooterText, SitemapMob, SitemapMobMenu, SitemapBlock, IconApple, IconGoogle, Face, Youtube, Insta } from './style';
import { Container } from '../../globals';

import { Link, useHistory } from "react-router-dom";
function footer() {
  return (
    <Footer>
      <Container>

        <Sitemap>
          <SitemapBlock >
            <span style={{ display: 'block', width: 245 }}>A Goodog</span>
            <ul>
              <li>
                <Link to="/#sobre_nos" style={{ textDecoration: 'none', color: '#fff' }}>
                  Sobre nós
                </Link>
              </li>
              <li>Como funciona?</li>
              <li>Termos de uso</li>
              <li>Política de privacidade</li>
              <li>GDPR</li>
            </ul>
          </SitemapBlock>
          <SitemapBlock>
            <span style={{ display: 'block', width: 183 }}>Serviços</span>
            <ul>
              <li>
                <Link to="/cliente" style={{ textDecoration: 'none', color: '#fff' }}>
                  Hotel
                </Link>
              </li>
              <li>
                <Link to="/cliente" style={{ textDecoration: 'none', color: '#fff' }}>
                  Berçário
                </Link>
              </li>
              <li>
                <Link to="/cliente" style={{ textDecoration: 'none', color: '#fff' }}>
                  Babá
                </Link>
              </li>
              <li>
                <Link to="/cliente" style={{ textDecoration: 'none', color: '#fff' }}>
                  Passeio
                </Link>
              </li>
            </ul>
          </SitemapBlock>
          <SitemapBlock>
            <span style={{ display: 'block', width: 227 }}>Contato</span>
            <ul style={{ borderRight: '0.5px solid #FFFFFF' }}>
              <li>email@goodog.com</li>
              <li>+351 00 999 999 999</li>
              <li>Dúvidas frequentes</li>
            </ul>
          </SitemapBlock>
        </Sitemap>
        <Sitemap style={{ marginLeft: 32 }}>
          <SitemapBlock >
            <span style={{ display: 'block', width: 168 }}>Download</span>
            <ul>
              <li><IconApple /></li>
              <li><IconGoogle /></li>
            </ul>
          </SitemapBlock>
          <SitemapBlock >
            <span style={{ display: 'block', width: 111 }}>Siga-nos</span>
            <ul>
              <li>
                <Face />
                <Insta />
                <Youtube />
              </li>
            </ul>
          </SitemapBlock>
        </Sitemap>

        <SitemapMob>
          <ul style={{ height: 50 }}>
            <li><IconGoogle /></li>
            <li><IconApple /></li>
          </ul>

          <div style={{ marginTop: '42.5px', borderBottom: '1px solid', borderColor: '#fff' }}></div>
          <SitemapMobMenu>
            <ul>
              <li>
                A Goodog
                <span></span>
              </li>
              <li>
                Serviço
                <span></span>
              </li>
              <li>
                Contato
                <span></span>
              </li>
            </ul>

          </SitemapMobMenu>
          <SitemapBlock >

            <ul>
              <li>
                <Face />
                <Insta />
                <Youtube />
              </li>
            </ul>
          </SitemapBlock>
        </SitemapMob>
        <FooterText></FooterText>
      </Container>
    </Footer >
  );
}

export default footer;