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
                  <div onClick={() => {window.location.href="https://amzn.to/3pL6lSP"}}  className="card-img">
                  <a href="https://www.amazon.in/OPPO-Fantastic-Purple-128GB-Storage/dp/B08VB34KJ1?smid=A14CZOWI0VEHLG&linkCode=li3&tag=sahara059-21&linkId=f36821f0751237ef2df2d2fc18e96217&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08VB34KJ1&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B08VB34KJ1" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link  className="card-btn" pathname="deals" onClick={() => {window.location.href="https://amzn.to/3pL6lSP"}} target="_blank">OPPO  </Link>
                </div>
                
                <div className="card">
                  <div onClick={() => {window.location.href="https://amzn.to/3sMyHh6"}}  className="card-img">
                  <a href="https://www.amazon.in/iQOO-Storage-Processor-FlashCharge-Replacement/dp/B07WHR5RKH?smid=AQUYM0O99MFUT&pf_rd_r=410XEAP39BRVDYNB60GV&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pd_rd_r=d4c9c9d2-00d1-455d-8a45-7cce583ec747&pd_rd_w=cCDB3&pd_rd_wg=4RVDe&linkCode=li3&tag=sahara059-21&linkId=7ee436fc18920c7f4e9209bf3548ce5e&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07WHR5RKH&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B07WHR5RKH" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link  className="card-btn" pathname="deals" onClick={() => {window.location.href="https://amzn.to/3sMyHh6"}} target="_blank">iQOO Z3 5G</Link>
                </div>
                <div className="card">
                  <div onClick={() => {window.location.href="https://amzn.to/3KrdIqs"}}  className="card-img">
                  <a href="https://www.amazon.in/Pre-Order-Lava-Blue-Performance-Processor/dp/B09S3Y2R72?smid=A14CZOWI0VEHLG&pf_rd_r=5066Q3GPWTRNT0EW34KP&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pd_rd_r=46505204-cadf-4923-ac04-bc6f13b3ff44&pd_rd_w=dI0RH&pd_rd_wg=X866z&linkCode=li3&tag=sahara059-21&linkId=442aa42925d552480281dde076255e0b&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09S3Y2R72&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09S3Y2R72" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3KrdIqs"}} target="_blank">Lava X2</Link>
                </div>
                <div onClick={() => {window.location.href="https://amzn.to/3tyEJBp"}} className="card">
                  <div className="card-img">
                  <a href="https://www.amazon.in/HP-15-6-inch-Anti-Glare-Alexa-Built-15s-dy3501TU/dp/B09P1PYGX5?m=A14CZOWI0VEHLG&pd_rd_r=a09c77b1-0c37-4cb4-b135-e2ade9c4f634&pd_rd_w=1GSOa&pd_rd_wg=ciAzb&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=ZAPWY8GXHA6ACXW6P83Z&qid=1646445393&refinements=p_6%3AA14CZOWI0VEHLG&smid=A14CZOWI0VEHLG&sr=8-1&linkCode=li3&tag=sahara059-21&linkId=eb784af364ce1a4cbaca385c7f16526c&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09P1PYGX5&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09P1PYGX5" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3tyEJBp"}} target="_blank">Laptops</Link>
                </div>
                <div onClick={() => {window.location.href="https://amzn.to/3HJnUIP"}} className="card">
                  <div className="card-img">
                  <a href="https://www.amazon.in/Mivi-Wireless-Bluetooth-Immersive-Powerful/dp/B08ZYPBSSH?smid=A14CZOWI0VEHLG&th=1&linkCode=li3&tag=sahara059-21&linkId=a195b0c97941b607d225de60352f2ec3&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08ZYPBSSH&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B08ZYPBSSH" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3HJnUIP"}} target="_blank">Mivi Earbuds </Link>
                </div>
                <div onClick={() => {window.location.href="https://amzn.to/3pOidDk"}} className="card">
                  <div className="card-img">
                  <a href="https://www.amazon.in/Zoook-Thunder-Bluetooth-Speaker-Karaoke/dp/B07DVYNYPW?smid=A14CZOWI0VEHLG&linkCode=li3&tag=sahara059-21&linkId=7c7c70d050e3e0ec40b0ef3f2208aea8&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07DVYNYPW&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B07DVYNYPW" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3pOidDk"}} target="_blank">Speakers</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3Mm3iu0"}}>
                    <a href="https://www.amazon.in/boAt-Monitoring-Ecosystem-Multiple-Resistance/dp/B09P8JMCB3?crid=FHVCDS73YMWV&pd_rd_r=487a557c-71c1-4592-8dae-73ee88649efe&pd_rd_w=bGH03&pd_rd_wg=3PDQ4&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=6J95SFHW0JN5WA6Q67VB&qid=1643443287&smid=A14CZOWI0VEHLG&sprefix=b09mtyb9lv+b09mty8mm8+b09mw3dp92+b09mw3mgyh+b09nykz7m8+b09pl79d2x+b09pl8cpsc+b09pl677cs+b09lmcs8hc+b09p8g14r8+b09p8jmcb3+b09p8js5cf+%2Caps%2C412&sr=8-1&linkCode=li3&tag=sahara059-21&linkId=a98bd9cacb55b54becc72b6fb7efaefc&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09P8JMCB3&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09P8JMCB3" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3Mm3iu0"}} target="_blank">Boat Watch Matrix</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3pKJ5Ec"}}>
                  <a href="https://www.amazon.in/Fastrack-Reflex-Digital-Unisex-Adult-Watch-SWD90067PP03A/dp/B08W29ZW6S?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=da385715759981df17974cb554a7da92&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08W29ZW6S&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B08W29ZW6S" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3pKJ5Ec"}} target="_blank">Watches</Link>
                </div>
                <div className="card">
                  <div className="card-img">
                      <a href="https://www.amazon.in/Lenovo-60-45cm-Brightness-FreeSync-G24-20/dp/B09FTCZPW4?pd_rd_r=487a557c-71c1-4592-8dae-73ee88649efe&pd_rd_w=bGH03&pd_rd_wg=3PDQ4&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=6J95SFHW0JN5WA6Q67VB&qid=1643449649&smid=A14CZOWI0VEHLG&sr=8-6&linkCode=li3&tag=sahara059-21&linkId=72fd32f58e98d514db8ceed6f9889896&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09FTCZPW4&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09FTCZPW4" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3L5MWoL"}} target="_blank">Televisions</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/372whTl"}}>
                    <a href="https://www.amazon.in/Bassbuds-Jade-Headphone-Cancellation-Waterproof/dp/B09BNZLTDZ?smid=A14CZOWI0VEHLG&th=1&linkCode=li3&tag=sahara059-21&linkId=92be9b48a5ad3dda48efcccf7c5530d7&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09BNZLTDZ&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09BNZLTDZ" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/372whTl"}} target="_blank">Ptron</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3KohvVk"}}>
                  <a href="https://www.amazon.in/Fujifilm-Instax-Square-SQ1-Camera/dp/B08H887HNJ?smid=A14CZOWI0VEHLG&linkCode=li3&tag=sahara059-21&linkId=385b13911d0ee06fd06d6524d09f15ff&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08H887HNJ&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B08H887HNJ" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3KohvVk"}} target="_blank">Camers</Link>
                </div>
                <div className="card">
                  <div className="card-img">
                  <a href="https://www.amazon.in/boAt-Bassheads-242-Earphones-Carbon/dp/B09FSWY5BP?crid=2YERFL9M9DOXS&pd_rd_r=487a557c-71c1-4592-8dae-73ee88649efe&pd_rd_w=bGH03&pd_rd_wg=3PDQ4&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=6J95SFHW0JN5WA6Q67VB&qid=1643443641&smid=A14CZOWI0VEHLG&sprefix=b071z8m4kx+b07234xxjf+b07gpxxnng+b07gqd4k6l+b08md255xb+b08md23pmw+b08md2ctdb+b08pp4xsmq+&sr=8-1&linkCode=li3&tag=sahara059-21&linkId=38cd621f7f3e5a0c64e8fcb56fdcd796&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09FSWY5BP&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09FSWY5BP" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3o8wGcK"}} target="_blank">boAt Bassheads</Link>
                </div>
               
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3rZkLiu"}}>
                  <a href="https://www.amazon.in/Moonwalk-M4-Earphones-Microphone-Bluetooth/dp/B09HZFCB89?crid=1LMY0GIIYIZ8S&pd_rd_r=487a557c-71c1-4592-8dae-73ee88649efe&pd_rd_w=bGH03&pd_rd_wg=3PDQ4&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=6J95SFHW0JN5WA6Q67VB&qid=1643445535&smid=A14CZOWI0VEHLG&sprefix=b09hzfcb89+b09p1bh84z+b09mwmk485+b09mwm3ts3+b091gv4n28+b08t96r3xj+b09mfdd266+b09mdcbjp2+b09cts38sy+b09ctsv8zw%2Caps%2C374&sr=8-7&linkCode=li3&tag=sahara059-21&linkId=faaab11ecf828e043ac23af9bb2392e1&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09HZFCB89&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09HZFCB89" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3rZkLiu"}} target="_blank">Earbuds</Link>
                </div>
                <div className="card" onClick={() => {window.location.href="https://amzn.to/3HHSbbd"}} >
              
                  <div className="card-img">
                  <a href="https://www.amazon.in/boAt-Airdopes-141-Wireless-Resistance/dp/B09N3ZNHTY?crid=1WVYGZ4Y57C15&pd_rd_r=8e55e33d-9deb-48aa-8f08-98f4b81c8f11&pd_rd_w=ALuic&pd_rd_wg=M735F&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=8P0NHSFK3E4C6XEB5GBP&qid=1646365093&smid=A14CZOWI0VEHLG&sprefix=%2Celectronics%2C519&sr=8-1&linkCode=li3&tag=sahara059-21&linkId=f30e603f6f67daf1a124c34d8a37b48a&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09N3ZNHTY&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09N3ZNHTY" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3HHSbbd"}} target="_blank">boat Airdopes</Link>
                </div>
                <div className="card" onClick={() => {window.location.href="https://amzn.to/3Kgo0JE"}} >
              
                  <div className="card-img">
                  <a href="https://www.amazon.in/Noise-Wireless-Instacharge-Hypersync-Technology/dp/B092DHTXH2?crid=2OJQ3WE6AFKWR&pd_rd_r=8e55e33d-9deb-48aa-8f08-98f4b81c8f11&pd_rd_w=ALuic&pd_rd_wg=M735F&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=8P0NHSFK3E4C6XEB5GBP&qid=1646365683&smid=A14CZOWI0VEHLG&sprefix=b09lcfzmgd+b09dd7f3cb+b09dd68jxr+b09d3ys64w+b09d3x79fc+b095z1nbk6+b095yzb3ms+b092zfv1fc+b092dhtxh2+b08vr9nrz5+b08sw6mqmd+b08sw5f9gj+b08svzjnvp+b08svpw1jq+b08l8xsjwb+b08h8q5klk+b08h8n3rkt%2Caps%2C607&sr=8-2&linkCode=li3&tag=sahara059-21&linkId=6678705ec32517a97fecaa2e336ab2fc&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B092DHTXH2&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B092DHTXH2" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3Kgo0JE"}} target="_blank">Noise Airbuds</Link>
                </div>
                <div className="card" onClick={() => {window.location.href="https://amzn.to/3hFoAob"}} >
              
                  <div className="card-img">
                  <a href="https://www.amazon.in/Launched-Wings-Playtime-Bluetooth-Resistance/dp/B09PTCL27V?crid=1S5ZORINW02FH&pd_rd_r=a09c77b1-0c37-4cb4-b135-e2ade9c4f634&pd_rd_w=1GSOa&pd_rd_wg=ciAzb&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=ZAPWY8GXHA6ACXW6P83Z&qid=1646446774&smid=A14CZOWI0VEHLG&sprefix=b09ptjmcc4+b09ptcl27v%2Caps%2C335&sr=8-1&linkCode=li3&tag=sahara059-21&linkId=3776297d9d515a6f8145c5550dbeba61&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09PTCL27V&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09PTCL27V" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3hFoAob"}} target="_blank">Phantom Gaming Earbuds</Link>
                </div>
                
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3Chvg5f"}}>
                  <a href="https://www.amazon.in/AGARO-Professional-Concentrator-Diffuser-Temperature/dp/B094XSDC41?smid=A2GTG1HPYW8M2P&linkCode=li3&tag=sahara059-21&linkId=880c7a6cce098a0c21d0fc69128ea78a&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B094XSDC41&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B094XSDC41" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3Chvg5f"}} target="_blank">Grooming Devices</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3KpSNnp"}}>
                  <a href="https://www.amazon.in/Seven-Rocks-Regular-T-Shirt-L-T15-NB/dp/B07BQCVTSS?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=759581b9b671fcb01502cf14aeb3da02&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07BQCVTSS&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B07BQCVTSS" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3KpSNnp"}} target="_blank">T-shirts</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3MxCNSf"}}>
                  <a href="https://www.amazon.in/Crocs-Bayaband-Black-Clogs-8-205089-066/dp/B0819RJD2D?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=31939c04e7815fcb292edb54078c30bd&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0819RJD2D&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B0819RJD2D" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3MxCNSf"}} target="_blank">Crocs, Converse & more</Link>
                </div>
                
                
               
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/35xbKpx"}}>
                  <a href="https://www.amazon.in/Adidas-Mens-Clinch-X-Running-Shoe/dp/B08FZVSR7V?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=900845624084d20e8d70e37223588fa5&language=en_IN&ref_=as_li_ss_il" target="_blank"rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08FZVSR7V&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img alt="s" src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B08FZVSR7V" width={1} height={1} border={0}  style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/35xbKpx"}} target="_blank">Adidas,Bata & more</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3HFvVi1"}}>
                  <a href="https://www.amazon.in/dp/B086R48ZN6?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-2&pf_rd_r=9S7E2YZ4Y6AYTT1R72F7&pf_rd_t=101&pf_rd_p=a31ad646-ac57-433c-bdf3-0a5be80ecf6b&pf_rd_i=26695656031&linkCode=li3&tag=sahara059-21&linkId=cfb060bafa1146d4a3a242841521e45b&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B086R48ZN6&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B086R48ZN6" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3HFvVi1"}} target="_blank">Cycles</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/35FzBU3"}}>
                  <a href="https://www.amazon.in/Nike-Experience-University-Grey-White-CI9960-005/dp/B08Q8SKH76?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=c6bfebaa419560e1b500aa87c52b9a4a&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08Q8SKH76&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B08Q8SKH76" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/35FzBU3"}} target="_blank">Nike, Skechers & more</Link>
                </div>
                
                
                
                
                
              </ImageScroller>
              </div>
        </div>
   );
}
export default Slider;
