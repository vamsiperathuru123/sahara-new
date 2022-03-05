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
                  <div onClick={() => {window.location.href="https://amzn.to/3KcFFC2"}}  className="card-img">
                    <a href="https://www.amazon.in/Vivo-Midnight-Additional-Exchange-Offers/dp/B09Q5Z5M9D?smid=A14CZOWI0VEHLG&th=1&linkCode=li3&tag=sahara059-21&linkId=f4d976bc4b5ea862be6724251cb0e8fb&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09Q5Z5M9D&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09Q5Z5M9D" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link  className="card-btn" pathname="deals" onClick={() => {window.location.href="https://amzn.to/3KcFFC2"}} target="_blank">Oppo Phones</Link>
                </div>
                <div className="card">
                  <div onClick={() => {window.location.href="https://amzn.to/3IJScgb"}}  className="card-img">
                  <a href="https://www.amazon.in/New-Apple-iPhone-12-64GB/dp/B08L5WHFT9?smid=A14CZOWI0VEHLG&th=1&linkCode=li3&tag=sahara059-21&linkId=7b1adb8f7aa88739767328115feebe93&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer" ><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08L5WHFT9&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B08L5WHFT9" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3IJScgb"}} target="_blank">iphone 12</Link>
                </div>
                <div onClick={() => {window.location.href="https://amzn.to/3tyEJBp"}} className="card">
                  <div className="card-img">
                  <a href="https://www.amazon.in/HP-15-6-inch-Anti-Glare-Alexa-Built-15s-dy3501TU/dp/B09P1PYGX5?m=A14CZOWI0VEHLG&pd_rd_r=a09c77b1-0c37-4cb4-b135-e2ade9c4f634&pd_rd_w=1GSOa&pd_rd_wg=ciAzb&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=ZAPWY8GXHA6ACXW6P83Z&qid=1646445393&refinements=p_6%3AA14CZOWI0VEHLG&smid=A14CZOWI0VEHLG&sr=8-1&linkCode=li3&tag=sahara059-21&linkId=eb784af364ce1a4cbaca385c7f16526c&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09P1PYGX5&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09P1PYGX5" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3tyEJBp"}} target="_blank">Laptops</Link>
                </div>
                <div onClick={() => {window.location.href="https://amzn.to/3tPiCXF"}} className="card">
                  <div className="card-img">
                  <a href="https://www.amazon.in/HP-Duplex-Hi-Capacity-Printer-Sensor/dp/B09H342LC8?smid=A14CZOWI0VEHLG&th=1&linkCode=li3&tag=sahara059-21&linkId=928f0216f7ee8891ae8014b07febd403&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09H342LC8&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09H342LC8" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3tPiCXF"}} target="_blank">Printers</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3Mm3iu0"}}>
                    <a href="https://www.amazon.in/boAt-Monitoring-Ecosystem-Multiple-Resistance/dp/B09P8JMCB3?crid=FHVCDS73YMWV&pd_rd_r=487a557c-71c1-4592-8dae-73ee88649efe&pd_rd_w=bGH03&pd_rd_wg=3PDQ4&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=6J95SFHW0JN5WA6Q67VB&qid=1643443287&smid=A14CZOWI0VEHLG&sprefix=b09mtyb9lv+b09mty8mm8+b09mw3dp92+b09mw3mgyh+b09nykz7m8+b09pl79d2x+b09pl8cpsc+b09pl677cs+b09lmcs8hc+b09p8g14r8+b09p8jmcb3+b09p8js5cf+%2Caps%2C412&sr=8-1&linkCode=li3&tag=sahara059-21&linkId=a98bd9cacb55b54becc72b6fb7efaefc&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09P8JMCB3&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09P8JMCB3" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3Mm3iu0"}} target="_blank">Boat Watch Matrix</Link>
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
                  <div className="card-img">
                  <a href="https://www.amazon.in/boAt-Bassheads-242-Earphones-Carbon/dp/B09FSWY5BP?crid=2YERFL9M9DOXS&pd_rd_r=487a557c-71c1-4592-8dae-73ee88649efe&pd_rd_w=bGH03&pd_rd_wg=3PDQ4&pf_rd_p=f690369a-7bb4-48bb-9349-f68a447ef06d&pf_rd_r=6J95SFHW0JN5WA6Q67VB&qid=1643443641&smid=A14CZOWI0VEHLG&sprefix=b071z8m4kx+b07234xxjf+b07gpxxnng+b07gqd4k6l+b08md255xb+b08md23pmw+b08md2ctdb+b08pp4xsmq+&sr=8-1&linkCode=li3&tag=sahara059-21&linkId=38cd621f7f3e5a0c64e8fcb56fdcd796&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09FSWY5BP&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09FSWY5BP" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3o8wGcK"}} target="_blank">boAt Bassheads</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3vB1Xcy"}}>
                  < a href="https://www.amazon.in/Helix-Metalfit-smartwatch-feature-Activity/dp/B09CPLJKK7?smid=A1JFLV2BUSJ5AK&linkCode=li3&tag=sahara059-21&linkId=ca46e3b16eab82f0ffc6778b1fddeb93&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09CPLJKK7&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B09CPLJKK7" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3vB1Xcy"}} target="_blank"> Watches</Link>
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
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3vDst5d"}}>
                  <a href="https://www.amazon.in/Sony-WH-CH710N-Cancelling-Wireless-Headphones/dp/B0872FKQZZ?smid=A14CZOWI0VEHLG&linkCode=li3&tag=sahara059-21&linkId=59c844c4d6c26055a427519208c1fbf0&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0872FKQZZ&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B0872FKQZZ" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3vDst5d"}} target="_blank">Sony</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3px5jJS"}}>
                  <a href="https://www.amazon.in/Tulsi-Walnut-Kernels-200g/dp/B01HBRBY5E?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=1d2aa964ff0ff90f335b194ea84d1bb4&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01HBRBY5E&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B01HBRBY5E" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3px5jJS"}} target="_blank">Daily Food Essentials</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3hA9Fvh"}}>
                  <a href="https://www.amazon.in/Nivea-Whitening-Smooth-Skin-Roll/dp/B00FRDAGB8?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=92b83226c48f84e3202a68fb792da2b5&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img border={0} alt="s" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00FRDAGB8&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B00FRDAGB8" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3hA9Fvh"}} target="_blank">Beauty Products</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3pEhFQr"}}>
                  <a href="https://www.amazon.in/Seven-Rocks-Cotton-T-Shirt-M-T15-NB/dp/B07C9BDYHV?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=30c1a146128d6bfe2ea6fc6748b2299d&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07C9BDYHV&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B07C9BDYHV" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3pEhFQr"}} target="_blank">Clothes</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3hE3giU"}}>
                  <a href="https://www.amazon.in/US-Polo-Association-Regular-USTS5778_White_XL/dp/B077Y939RR?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=39b26cf24d280ec3c72f2338cdd3b384&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B077Y939RR&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B077Y939RR" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3hE3giU"}} target="_blank">Levi's</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/36P1vx1"}}>
                  <a href="https://www.amazon.in/Bollyclues-Crepe-Flare-Dress-BCPR001DS_Maroon_M/dp/B08RDWDW87?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=2c17562113f1abe6444c36605130e0fa&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08RDWDW87&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B08RDWDW87" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/36P1vx1"}} target="_blank">Tops & Dresses</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3MxXWvR"}}>
                  <a href="https://www.amazon.in/T2F-Joggers-Track-13-14-Years/dp/B08189TZ8Z?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=0f45c0a6f72a8764e8d2810ab09127bd&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08189TZ8Z&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B08189TZ8Z" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3MxXWvR"}} target="_blank">Shorts</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3CeNBjq"}}>
                  <a href="https://www.amazon.in/Nike-Experience-University-Grey-White-CI9960-005/dp/B08Q8SKH76?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=bce2608da1e91810553196acaa25d978&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08Q8SKH76&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B08Q8SKH76" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3CeNBjq"}} target="_blank">FootWear</Link>
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
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/34b2M0r"}}>
                  <a href="https://www.amazon.in/LuvLap-Newborn-Toddler-Portable-Bouncer/dp/B07M72B83V?smid=AT95IG9ONZD7S&th=1&linkCode=li3&tag=sahara059-21&linkId=3665289fc47d618443690e09cd7328b9&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07M72B83V&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B07M72B83V" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/34b2M0r"}} target="_blank">Baby</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/34fD6jt"}}>
                  <a href="https://www.amazon.in/Havells-Brushed-Nickel-Ceiling-1320mm/dp/B071HGM642?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=83e4e77060ac056d8757c2edaf214f6c&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B071HGM642&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img  src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B071HGM642" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/34fD6jt"}} target="_blank">Summer Appliances</Link>
                </div>
                <div className="card">
                  <div className="card-img" onClick={() => {window.location.href="https://amzn.to/3K9l3uy"}}>
                  <a href="https://www.amazon.in/AmazonBasics-Litre-1700-Fryer-Touchscreen/dp/B0842CVYNS?smid=AT95IG9ONZD7S&linkCode=li3&tag=sahara059-21&linkId=2fdf4ff15e7562fa3dd05df8775f0dc5&language=en_IN&ref_=as_li_ss_il" target="_blank" rel="noopener noreferrer"><img alt="s" border={0} src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0842CVYNS&Format=_SL250_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=sahara059-21&language=en_IN" /></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=sahara059-21&language=en_IN&l=li3&o=31&a=B0842CVYNS" width={1} height={1} border={0} alt="s" style={{border: 'none !important', margin: '0px !important'}} />
                  </div>
                  <Link className="card-btn"  pathname="deals" onClick={() => {window.location.href="https://amzn.to/3K9l3uy"}} target="_blank">Kitchen Appliances</Link>
                </div>
                
                
                
                
                
              </ImageScroller>
              </div>
        </div>
   );
}
export default Slider;
