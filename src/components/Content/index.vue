<template>
	<section class="content">
		<div class="container">
			<ul class="content-breadcrumbs">
				<li>
					<a href="#">Главная</a>
				</li>
				<li>
					<a href="#">Доставка еды</a>
				</li>
			</ul>
			
			<div class="content-main">
				<div class="sidebar">
					<div class="sidebar-buttons">
						<a class="is-active" href="#">Рестораны</a><a href="#">Магазины</a>
					</div>
					<span class="sidebar-title">Кухни и блюда</span>

					<ul class="sidebar-list">
						<li>
							<label>
								<input v-model.number="selectedCategory" name="1" value="1" type="checkbox">
								Пицца
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="2" value="2" type="checkbox">
								Суши
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="3" value="3" type="checkbox">
								Бургеры и Донеры
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="4" value="4" type="checkbox">
								Шашлыки
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="5" value="5" type="checkbox">
								Пироги и блины
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="6" value="6" type="checkbox">
								Комплексные обеды
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="7" value="7" type="checkbox">
								Wok лапша
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="8" value="8" type="checkbox">
								Лагманы и манты
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="9" value="9" type="checkbox">
								Правильное питание
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="10" value="10" type="checkbox">
								Десерты
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="11" value="11" type="checkbox">
								Напитки
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="12" value="12" type="checkbox">
								Итальянская и Европейская
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="13" value="13" type="checkbox">
								Японская кухня
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="14" value="14" type="checkbox">
								Русская и Украинская
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="15" value="15" type="checkbox">
								Паназиатская и Китайская
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="16" value="16" type="checkbox">
								Корейская кухня
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="17" value="17" type="checkbox">
								Кавказская и Грузинская
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="18" value="18" type="checkbox">
								Казахская и Уйгурская
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="19" value="19" type="checkbox">
								Мексиканская и Испанская
							</label>
						</li>
						<li>
							<label>
								<input v-model.number="selectedCategory" name="20" value="20" type="checkbox">
								Индийская
							</label>
						</li>
					</ul>

					<hr>

					<span class="slider">
						Минимальная сумма заказа до <input v-model.number="slider_value" type="number"> тг.
					</span>
					<vue-slider class="slider-tool" v-bind="slider_options" ref="slider" v-model="slider_value" />
					<p class="price-sidebar" >Максимальная цена : {{ maxPrice == -Infinity ? 'Загрузка' : maxPrice }} </p>
					<p class="price-sidebar" >Минимальная цена : {{ minPrice == Infinity ? 'Загрузка' : minPrice }} </p>
					<hr>

					<div class="local-salary">
						Район доставки
						<div class="local-option">
							<select name="local-salary">
								<option value="Караганда">Караганда</option>
							</select>
						</div>
					</div>

					<hr>

					<div class="criterials">
						<span>Критерии:</span>
						<ul>
							<li><label><input type="checkbox">Новые</label></li>
							<li><label><input v-model.number="selectedCategory" name="40" value="40" type="checkbox">С акциями</label></li>
						</ul>
					</div>

				</div>

				<div class="right-content">
					<div class="top-filter">
						<select name="top-filter" id="">
							<option value="Караганда">Караганда</option>
						</select>
						<div class="buttons-group">
							<a @click="isOpen = false" :class="{'is-active': !isOpen}">Все</a>
							<a :class="{'is-active': isOpen}" type="button" @click="isOpen = true">Открытые</a>
						</div>
					</div>
					<div class="right-content-main">
						<div class="card-wrapper">
							<div :key="index" v-for="(item, index) in filtredRes" class="card">
								<div v-if="item.isOpened" class="status">Открыто</div>
								<div v-else class="status status-close" >Закрыто</div>
								<div v-if="item.category.includes(40)" class="status status-stock">Акция!</div>
								<div class="img">
									<img :src="item.img" :alt="item.name">
								</div>
								<div class="card-info">
									<div class="top-info">
										<h2 class="top-title">{{item.name}}</h2>
										<p class="category">
											{{item.kitchen}}
										</p>
									</div>
									<div class="bot-info">
										<ul class="bot-info-list">
											<li class="price">
												<span>{{item.minOrderAmount}} тг.</span>
												<div class="bot-desc">Мин. сумма заказа</div>
											</li>
											<li class="delivery-price">
												<span>{{item.deliveryPrice}}</span>
												<div class="bot-desc">стоимость доставки</div>
											</li>
											<li class="delivery-const">
												<span>{{item.avgDeliveryTime}}</span>
												<div class="bot-desc">среднее время доставки</div>
											</li>
										</ul>
										<div class="more-info">
											{{item.shortInfo.info}}
										</div>
									</div>
								</div>
							</div>
							<h1 v-show="!dataRes.length">Загрузка...</h1>
							<h1 v-if="dataRes.length && !filtredRes.length"> Ничего не найдено </h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import vueSlider from 'vue-slider-component';
import firebase from 'firebase';
import {mapToArray} from '@/utils';
export default {
	name: 'Content',
	components: {
		vueSlider
	},
	data() {
		return {
			isOpen: false,
			selectedCategory: [],
			dataRes: [],
			slider_value: 5000,
			slider_options: {
				max: 5000,
				height: "10",
				interval: 100,
				tooltip: "never"
			}
		}
	},
	created() {
		firebase.database().ref('emenu-restaurants').once('value')
			.then(data => {
				this.dataRes = mapToArray(data.val());
			})
	},
	computed: {
		filtredRes() {
			return this.dataRes.filter(res => {
				if (this.slider_value >= res.minOrderAmount && !this.selectedCategory.length)
					return !this.isOpen ? res : res.isOpened;
				for (let i = 0; i < this.selectedCategory.length; i++) {
					if (res.category.includes(this.selectedCategory[i]) && this.slider_value >= res.minOrderAmount) 
						return !this.isOpen ? res : res.isOpened
				}
			})
		},
		minPrice() {
			const prices = [];
			this.dataRes.forEach(res => {
				prices.push(res.minOrderAmount);
			})
			return Math.min(...prices);
		},
		maxPrice() {
			const prices = [];
			this.dataRes.forEach(res => {
				prices.push(res.minOrderAmount);
			})
			return Math.max(...prices);
		},
	}
}
</script>

<style lang="sass">
@import '../../assets/sass/vars'
.content
	&-breadcrumbs
		display: flex
		list-style-type: none
		padding: 0
		margin: 35px 0
		li
			&:after
				content: '|'
				display: inline-block
				margin-left: 10px
			&:not(:first-child)
				margin-left: 10px
			&:last-child
				&:after
					display: none
			a
				color: black
				font-weight: bold
				text-decoration: none
				border-bottom: 1px solid transparent
				transition: .2s ease
				&:hover
					border-bottom: 1px solid black

	&-main
		background-color: #ECECEC
		padding: 20px 20px
		display: flex

	.sidebar
		flex-basis: 200px

		&-buttons
			display: inline-flex
			box-shadow: 0 1px 3px rgba(0,0,0,0.3)
			a
				cursor: pointer
				background: white
				padding: 5px 10px
				text-transform: uppercase
				color: black
				font-size: 15px
				text-decoration: none
				border-right: solid 1px lightgray
				&.is-active
					background-color: #FEDF22

		&-title
			display: block
			font-weight: bold
			text-align: left
			margin: 10px 10px

		ul
			list-style-type: none
			padding: 0
			margin: 0
			li
				transition: .2s ease
				border-radius: 7px
				label
					padding: 8px 6px
					display: flex
					font-size: 14px
					white-space: nowrap 
					input[type="checkbox"]
						margin-right: 10px
				&:hover
					background-color: darken(#ECECEC, 10%)

		.slider
			font-size: 17px
			font-weight: bold
			input
				display: inline-block
				width: 50px
				background-color: #fff
				padding: 2px 5px
				border-radius: 5px
				border: 1px solid #ccc
				font-size: 15px
				font-weight: normal

			&-tool
				margin: 10px 0

		.local-salary
			font-weight: bold
			select
				margin: 5px 0
				width: 100%
				padding: 5px 7px

		.criterials
			span
				font-weight: bold

	.right-content
		flex-basis: 100%
		margin-left: 15px
		.top-filter
			display: flex
			align-items: center
			select
				padding: 5px 7px
				width: 200px
				height: 30.33px
				vertical-align: top
			
			.buttons-group
				display: inline-flex
				margin-left: 20px
				box-shadow: 0 1px 1px rgba(0,0,0,0.1)
				a
					margin-left: -1px
					cursor: pointer
					background-color: #ffffff
					padding: 5px 17px
					border: solid 1px #ced3d5
					color: black
					text-decoration: none
					font-size: 15px
					transition: .2s ease
					&:hover
						background-color: #EBEBEB
					&.is-active
						background-color: #EBEBEB
						box-shadow: inset 0 1px 10px rgba(0,0,0,0.1)

		&-main
			margin-top: 20px
			.card-wrapper
				display: flex
				flex-wrap: wrap
				.card
					position: relative
					padding: 10px 20px
					background-color: #fff
					display: flex
					width: 100%
					box-shadow: 0 3px 3px -2px rgba(0,0,0,0.5)
					border-radius: 5px
					&:not(last-child)
						margin-bottom: 20px
					.img
						margin-right: 10px
						img
							width: 100px
							height: 100px
					.status
						position: absolute
						top: 5px
						font-size: 13.5px
						left: calc(100% + 16px)
						background-color: #00B4AC
						text-align-last: left
						transform: translateX(-100%)
						color: #fff
						font-weight: bold
						padding: 5px 28px 5px 14px
						border-radius: 3px 0 0 3px
						border-color: #00B4AC
						&:after
							content: ''
							position: absolute
							top: 100%
							right: 0
							border-style: solid
							border-width: 16px 16px 0 0
							border-color: transparent
							border-top-color: inherit
						&-close
							background-color: #DA2828
							border-color: #DA2828
						&-stock
							background-color: #2385CE
							border-color: #2385CE
							top: 50px
					.top-info
						margin-left: 10px
						.top-title
						 font-family: 'Lobster', cursive
						 margin: 0
						 font-size: 30px
						.category
							margin-top: 5px
							width: 66%
							font-size: 11px
					
					.bot-info
						padding: 5px 10px
						background-color: #F5F4E6
						border-radius: 5px
						&-list
							margin: 0
							padding: 0
							display: flex
							list-style-type: none
							li
								margin-right: 30px
								span
									font-weight: bold
								.bot-desc
									color: #515151
									font-size: 11px
									
						.more-info
							margin-top: 10px
							font-size: 14px
							p
								margin: 5px 0
								line-height: 16px

							span
								margin-top: 15px
								display: block

							ul
								margin: 0
								padding: 0
								list-style-type: none

.price-sidebar
	margin: 5px 0
	font-size: 15px
	color: #777
	font-style: italic

@media (max-width: 765px)
	.sidebar
		display: none

	.content .right-content-main .card-wrapper .card
		display: block

	.content .right-content-main .card-wrapper .card .img img
		width: 100px
		height: auto

	.content .right-content-main .card-wrapper .card .bot-info
		margin-top: 20px

	.content .right-content-main .card-wrapper .card .top-info .category
		width: 88%
		+clearfix
	
	.content .right-content-main .card-wrapper .card .bot-info-list
		margin: 1px

	.content .right-content-main .card-wrapper .card .img
		float: left
</style>
