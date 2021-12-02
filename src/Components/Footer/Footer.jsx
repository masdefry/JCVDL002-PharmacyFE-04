import React from 'react';
import '../../Supports/Stylesheets/Components/Footer.css';
import 'bootstrap/dist/css/bootstrap.css';

import LogoSehat from '../../Supports/Assets/Footer/SehatYaj.svg';
import Send from '../../Supports/Assets/Footer/psywat.svg';
import Payment from '../../Supports/Assets/Footer/pembayaran.svg';
import Fb from '../../Supports/Assets/Socmed/facebook.svg';
import Ig from '../../Supports/Assets/Socmed/instagram.svg';
import Twitter from '../../Supports/Assets/Socmed/twitter.svg';
import Youtube from '../../Supports/Assets/Socmed/youtube.svg';
import Linkedin from '../../Supports/Assets/Socmed/linkedin.svg';
import Get from '../../Supports/Assets/Socmed/Getiton.svg';

export const Footer = () => {
	return (
		<div className='Footer px-5 mb-5'>
			<div className='Footer-Content px-5'>
				<div className='footer-img px-5 py-4'>
					<img src={LogoSehat} alt='' />
				</div>
				<div className='footer-item d-flex justify-content-evenly'>
					<div className='fItem-1'>
						<h4>Langganan Newsletter</h4>
						<p>
							Jadi orang yang pertama tahu info & promosi <br />
							kesehatan terbaru dari SehatY. Geratis.
						</p>
						<div className='message mb-4'>
							<div className='radio-btn d-flex mb-3'>
								<div>
									<input type='radio' id='laki' />
									<label htmlFor='laki'>Laki Laki</label>
								</div>
								<div className='ms-4'>
									<input type='radio' id='puan' />
									<label htmlFor='puan'>Perempuan</label>
								</div>
							</div>
							<div className='email-input'>
								<input type='text' placeholder='Email' />
								<img src={Send} alt='Send' />
							</div>
						</div>
						<h4>Metode Pembayaran</h4>
						<div className='payments'>
							<img src={Payment} alt='pay' />
						</div>
					</div>
					<div className='fItem-2'>
						<h4>Fitur</h4>
						<div className='links d-flex flex-column'>
							<a href='#'>Toko</a>
							<a href='#'>Produk Toko</a>
							<a href='#'>Kategori Toko</a>
							<a href='#'>Booking</a>
							<a href='#'>Promo</a>
							<a href='#'>Artikel</a>
							<a href='#'>Chat Dokter</a>
							<a href='#'>Penyakit</a>
							<a href='#'>Forum</a>
							<a href='#'>Review</a>
							<a href='#'>Tes Kesehatan</a>
						</div>
					</div>
					<div className='fItem-3 '>
						<div className='perusahaan mb-4'>
							<h4>Perusahaan</h4>
							<div className='links d-flex flex-column'>
								<a href='#'>Tentang Kami</a>
								<a href='#'>Karir</a>
								<a href='#'>Kontak Kami</a>
							</div>
						</div>
						<div className='perusahaan mb-4'>
							<h4>Perusahaan</h4>
							<div className='links d-flex flex-column'>
								<a href='#'>
									<img src={Fb} alt='' width='14' height='14' />
									<span className='ms-1'> Facebook</span>
								</a>
								<a href='#'>
									<img src={Twitter} alt='' width='14' height='14' />
									<span className='ms-1'> Twitter</span>
								</a>
								<a href='#'>
									<img src={Ig} alt='' width='14' height='14' />
									<span className='ms-1'> Instagram</span>
								</a>
								<a href='#'>
									<img src={Youtube} alt='' width='14' height='14' />
									<span className='ms-1'> Youtube</span>
								</a>
								<a href='https://www.linkedin.com/in/dearistyo/'>
									<img src={Linkedin} alt='' width='14' height='14' />
									<span className='ms-1'> Linkedin</span>
								</a>
							</div>
						</div>
					</div>
					<div className='fItem-4'>
						<div className='dukungan d-flex flex-column mb-4'>
							<h4>Dukungan</h4>
							<a href='#'>Syarat dan Ketentuan</a>
							<a href='#'>Privacy Policy</a>
							<a href='#'>Kebijakan Editorial</a>
							<a href='#'>Direktori Tag</a>
							<a href='#'>Pusat Bantuan</a>
						</div>
						<div className='daftar d-flex flex-column'>
							<h4>Daftar Menjadi Mitra</h4>
							<a href='#'>Merchant</a>
							<a href='#'>Mitra Faskes</a>
							<a href='#'>Mitra Perusahaan</a>
						</div>
					</div>
					<div className='fItem-5 d-flex flex-column'>
						<h4>Download SehatY App</h4>
						<img src={Get} alt='get' />
					</div>
				</div>
			</div>
		</div>
	);
};
