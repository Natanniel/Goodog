import React from 'react';

import { Footer, Sitemap, SitemapBlock, IconApple, IconGoogle, Face, Youtube, Insta } from './style';
import { Container } from '../../globals';

function footer() {
  return (
    <Footer>
      <Container>

        <Sitemap>
          <SitemapBlock >
            <span style={{ display: 'block', width: 245 }}>A Goodog</span>
            <ul>
              <li>Sobre nós</li>
              <li>Como funciona?</li>
              <li>Termos de uso</li>
              <li>Política de privacidade</li>
              <li>GDPR</li>
            </ul>
          </SitemapBlock>
          <SitemapBlock>
            <span style={{ display: 'block', width: 183 }}>Serviços</span>
            <ul>
              <li>Hotel</li>
              <li>Berçário</li>
              <li>Babá</li>
              <li>Passeio</li>
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
      </Container>
    </Footer >
  );
}

export default footer;