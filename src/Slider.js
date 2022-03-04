import React from "react";
import ImageScroller from 'react-image-scroller';
import './Slider.css';
import {Link} from 'react-router-dom';
import './Home.css'


function Slider(){
    return(
      <div>
            <h2 className="lap">
                  Today's Deals on amazon
            </h2>
            <div className="slider" >
                
              <ImageScroller   >
                
                <div className="card">
                  <div onClick={() => {window.location.href="https://amzn.to/3KghK4C"}}  className="card-img">
                    <a href="https://www.amazon.in/Vivo-Midnight-Additional-Exchange-Offers/dp/B09Q5Z5M9D?smid=A14CZOWI0VEHLG&th=1&linkCode=li3&tag=sahara059-21&linkId=f4d976bc4b5ea862be6724251cb0e8fb&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09Q5Z5M9D&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09Q5Z5M9D" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/3KghK4C"}}>Vivo Phones</Link>
                </div>
                <div onClick={() => {window.location.href="https://amzn.to/3vD31wB"}} className="card">
                  <div className="card-img">
                  <a href="https://www.amazon.in/HP-Pavilion-15-6-inch-Graphics-15-dk1514TX/dp/B09DY8BGSY?smid=A14CZOWI0VEHLG&linkCode=li3&tag=sahara059-21&linkId=0fe10f3099e8ac6d175a60b8bdba9bd3&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09DY8BGSY&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09DY8BGSY" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/3vD31wB"}}>Laptops</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3Mm3iu0"}}>
                    <a href="https://www.amazon.in/boAt-Monitoring-Ecosystem-Multiple-Resistance/dp/B09P8JMCB3?crid=FHVCDS73YMWV&pd_rd_r=487a557c-71c1-4592-8dae-73ee88649efe&pd_rd_w=bGH03&pd_rd_wg=3PDQ4&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=6J95SFHW0JN5WA6Q67VB&qid=1643443287&smid=A14CZOWI0VEHLG&sprefix=b09mtyb9lv+b09mty8mm8+b09mw3dp92+b09mw3mgyh+b09nykz7m8+b09pl79d2x+b09pl8cpsc+b09pl677cs+b09lmcs8hc+b09p8g14r8+b09p8jmcb3+b09p8js5cf+%2Caps%2C412&sr=8-1&linkCode=li3&tag=sahara059-21&linkId=a98bd9cacb55b54becc72b6fb7efaefc&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09P8JMCB3&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09P8JMCB3" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/3Mm3iu0"}}>Boat Watch Matrix</Link>
                </div>
                <div className="card">
                  <div className="card-img">
                      <a href="https://www.amazon.in/Lenovo-60-45cm-Brightness-FreeSync-G24-20/dp/B09FTCZPW4?pd_rd_r=487a557c-71c1-4592-8dae-73ee88649efe&pd_rd_w=bGH03&pd_rd_wg=3PDQ4&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=6J95SFHW0JN5WA6Q67VB&qid=1643449649&smid=A14CZOWI0VEHLG&sr=8-6&linkCode=li3&tag=sahara059-21&linkId=72fd32f58e98d514db8ceed6f9889896&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09FTCZPW4&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09FTCZPW4" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/3L5MWoL"}}>Televisions</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/372whTl"}}>
                    <a href="https://www.amazon.in/Bassbuds-Jade-Headphone-Cancellation-Waterproof/dp/B09BNZLTDZ?smid=A14CZOWI0VEHLG&th=1&linkCode=li3&tag=sahara059-21&linkId=92be9b48a5ad3dda48efcccf7c5530d7&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09BNZLTDZ&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09BNZLTDZ" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/372whTl"}}>Ptron</Link>
                </div>
                <div className="card">
                  <div className="card-img">
                  <a href="https://www.amazon.in/boAt-Bassheads-242-Earphones-Carbon/dp/B09FSWY5BP?crid=2YERFL9M9DOXS&pd_rd_r=487a557c-71c1-4592-8dae-73ee88649efe&pd_rd_w=bGH03&pd_rd_wg=3PDQ4&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=6J95SFHW0JN5WA6Q67VB&qid=1643443641&smid=A14CZOWI0VEHLG&sprefix=b071z8m4kx+b07234xxjf+b07gpxxnng+b07gqd4k6l+b08md255xb+b08md23pmw+b08md2ctdb+b08pp4xsmq+&sr=8-1&linkCode=li3&tag=sahara059-21&linkId=38cd621f7f3e5a0c64e8fcb56fdcd796&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09FSWY5BP&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09FSWY5BP" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/3o8wGcK"}}>boAt Bassheads</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3vB1Xcy"}}>
                  < a href="https://www.amazon.in/Helix-Metalfit-smartwatch-feature-Activity/dp/B09CPLJKK7?smid=A1JFLV2BUSJ5AK&linkCode=li3&tag=sahara059-21&linkId=ca46e3b16eab82f0ffc6778b1fddeb93&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09CPLJKK7&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09CPLJKK7" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/3vB1Xcy"}}> Watches</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3rZkLiu"}}>
                  <a href="https://www.amazon.in/Moonwalk-M4-Earphones-Microphone-Bluetooth/dp/B09HZFCB89?crid=1LMY0GIIYIZ8S&pd_rd_r=487a557c-71c1-4592-8dae-73ee88649efe&pd_rd_w=bGH03&pd_rd_wg=3PDQ4&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=6J95SFHW0JN5WA6Q67VB&qid=1643445535&smid=A14CZOWI0VEHLG&sprefix=b09hzfcb89+b09p1bh84z+b09mwmk485+b09mwm3ts3+b091gv4n28+b08t96r3xj+b09mfdd266+b09mdcbjp2+b09cts38sy+b09ctsv8zw%2Caps%2C374&sr=8-7&linkCode=li3&tag=sahara059-21&linkId=faaab11ecf828e043ac23af9bb2392e1&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09HZFCB89&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09HZFCB89" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/3rZkLiu"}}>Earbuds</Link>
                </div>
                <div className="card" onClick={() => {window.location.href="https://amzn.to/3HHSbbd"}} >
              
                  <div className="card-img">
                  <a href="https://www.amazon.in/boAt-Airdopes-141-Wireless-Resistance/dp/B09N3ZNHTY?crid=1WVYGZ4Y57C15&pd_rd_r=8e55e33d-9deb-48aa-8f08-98f4b81c8f11&pd_rd_w=ALuic&pd_rd_wg=M735F&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=8P0NHSFK3E4C6XEB5GBP&qid=1646365093&smid=A14CZOWI0VEHLG&sprefix=%2Celectronics%2C519&sr=8-1&linkCode=li3&tag=sahara059-21&linkId=f30e603f6f67daf1a124c34d8a37b48a&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09N3ZNHTY&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09N3ZNHTY" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/3HHSbbd"}}>boat Airdopes</Link>
                </div>
                <div className="card" onClick={() => {window.location.href="https://amzn.to/3Kgo0JE"}} >
              
                  <div className="card-img">
                  <a href="https://www.amazon.in/Noise-Wireless-Instacharge-Hypersync-Technology/dp/B092DHTXH2?crid=2OJQ3WE6AFKWR&pd_rd_r=8e55e33d-9deb-48aa-8f08-98f4b81c8f11&pd_rd_w=ALuic&pd_rd_wg=M735F&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=8P0NHSFK3E4C6XEB5GBP&qid=1646365683&smid=A14CZOWI0VEHLG&sprefix=b09lcfzmgd+b09dd7f3cb+b09dd68jxr+b09d3ys64w+b09d3x79fc+b095z1nbk6+b095yzb3ms+b092zfv1fc+b092dhtxh2+b08vr9nrz5+b08sw6mqmd+b08sw5f9gj+b08svzjnvp+b08svpw1jq+b08l8xsjwb+b08h8q5klk+b08h8n3rkt%2Caps%2C607&sr=8-2&linkCode=li3&tag=sahara059-21&linkId=6678705ec32517a97fecaa2e336ab2fc&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B092DHTXH2&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B092DHTXH2" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/3Kgo0JE"}}>Noise Airbuds</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3vDst5d"}}>
                  <a href="https://www.amazon.in/Sony-WH-CH710N-Cancelling-Wireless-Headphones/dp/B0872FKQZZ?smid=A14CZOWI0VEHLG&linkCode=li3&tag=sahara059-21&linkId=59c844c4d6c26055a427519208c1fbf0&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0872FKQZZ&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B0872FKQZZ" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/3vDst5d"}}>Sony</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3px5jJS"}}>
                  <a href="https://www.amazon.in/Tulsi-Walnut-Kernels-200g/dp/B01HBRBY5E?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=1d2aa964ff0ff90f335b194ea84d1bb4&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01HBRBY5E&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B01HBRBY5E" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/3px5jJS"}}>Daily Food Essentials</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3hA9Fvh"}}>
                  <a href="https://www.amazon.in/Nivea-Whitening-Smooth-Skin-Roll/dp/B00FRDAGB8?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=92b83226c48f84e3202a68fb792da2b5&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img border={0} alt="s" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00FRDAGB8&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B00FRDAGB8" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/3hA9Fvh"}}>Beauty Products</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3pEhFQr"}}>
                  <a href="https://www.amazon.in/Seven-Rocks-Cotton-T-Shirt-M-T15-NB/dp/B07C9BDYHV?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=30c1a146128d6bfe2ea6fc6748b2299d&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07C9BDYHV&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B07C9BDYHV" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/3pEhFQr"}}>Clothes</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3hE3giU"}}>
                  <a href="https://www.amazon.in/US-Polo-Association-Regular-USTS5778_White_XL/dp/B077Y939RR?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=39b26cf24d280ec3c72f2338cdd3b384&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B077Y939RR&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B077Y939RR" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/3hE3giU"}}>Levi's</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/36P1vx1"}}>
                  <a href="https://www.amazon.in/Bollyclues-Crepe-Flare-Dress-BCPR001DS_Maroon_M/dp/B08RDWDW87?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=2c17562113f1abe6444c36605130e0fa&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08RDWDW87&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B08RDWDW87" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/36P1vx1"}}>Tops & Dresses</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3MxXWvR"}}>
                  <a href="https://www.amazon.in/T2F-Joggers-Track-13-14-Years/dp/B08189TZ8Z?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=0f45c0a6f72a8764e8d2810ab09127bd&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08189TZ8Z&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B08189TZ8Z" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/3MxXWvR"}}>Shorts</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/34b2M0r"}}>
                  <a href="https://www.amazon.in/LuvLap-Newborn-Toddler-Portable-Bouncer/dp/B07M72B83V?smid=AT95IG9ONZD7S&th=1&linkCode=li3&tag=sahara059-21&linkId=3665289fc47d618443690e09cd7328b9&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07M72B83V&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B07M72B83V" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/34b2M0r"}}>Baby</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3Ca5i3P"}}>
                  <a href="https://www.amazon.in/Borosil-Stainless-Steel-Hydra-Teapot/dp/B07VNQ7MM3?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=fff8deb134107968de851372e8d8309f&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07VNQ7MM3&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B07VNQ7MM3" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn" onClick={() => {window.location.href="https://amzn.to/3Ca5i3P"}}>Home & Kitchen Appliances</Link>
                </div>
                
                
                
                
                
              </ImageScroller>
              </div>
        </div>
   );
}
export default Slider;
