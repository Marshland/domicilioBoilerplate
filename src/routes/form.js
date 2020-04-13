export default function Form() {
	return (
		<div class="">
			<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
				<p>
					<input type="hidden" name="form-name" value="contact" />
				</p>
				<p class="my-5">
					<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Categoria negozio</label>
					<select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required name="category">
						<option>Seleziona una categoria</option>
						<option>👩‍⚕️Salute</option>
						<option>🍦gelaterie</option>
						<option>🥩macellerie</option>
						<option>🍞Panifici</option>
						<option>🥬generi alimentari</option>
						<option>🍽️Ristorazione</option>
						<option>🎣Pesce fresco</option>
						<option>🍣sushi</option>
						<option>🍝pasta fresca e primi piatti</option>
						<option>🍾Enoteca e Birre</option>
						<option>🍎Frutta fresca</option>
						<option>🛒Supermercati</option>
						<option>🍩Pasticceria</option>
						<option>🍕Pizzerie</option>
						<option>👔Lavanderie</option>
						<option>👨‍💻Informatica</option>
						<option>🐶Prodotti per animali</option>
					</select>
				</p>
				<p class="my-5">
					<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Nome
						<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" required type="text" name="name" />
					</label>
				</p>
				<p class="my-5">
					<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Numero di telefono
						<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" inputmode="numeric" name="telephone" />
					</label>
				</p>
				<p class="my-5">
               <label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Email
                  <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" name="mail" />
               </label>
            </p>
				<p class="my-5">
					<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Sito Web
						<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" name="site" />
					</label>
				</p>
				<p class="my-5">
					<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Note
						<textarea class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" name="note" />
					</label>
				</p>
				<p class="my-5">
					<button class="block w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">Send</button>
				</p>
			</form>
		</div>
	);
}
