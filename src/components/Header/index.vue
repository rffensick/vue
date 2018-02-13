<template>
	<header class="header" >
		<div class="container">
			<div class="header-content" >
				<div class="header-brand">
					<a class="link-brand" href="#">
						<img class="img-responsive" src="@/assets/emenu-logo.png" alt="">
					</a>
				</div>
				<div class="header-choose__city">
					<span>Караганда</span>
				</div>
				<ul class="header-steps" >
					<li><a href="#"> Выбираете ресторан</a></li>
					<li><a href="#"> Оформляете заказ</a></li>
					<li><a href="#"> Оператор подтверждает</a></li>
					<li><a href="#"> Приятного аппетита</a></li>
				</ul>
				<div class="header-auth">
					<a class="header-auth__button" href="#">Вход/Регистрация</a>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'Header'
	}
</script>

<style lang="sass">
.header
	background-color: #434343
	color: white
	a
		display: block
		color: white
		text-decoration: none

	&-content
		max-height: 50px
		display: flex
		align-items: stretch

	&-brand
		align-self: center
		.link-brand
			img
				vertical-align: middle

	&-choose__city
		margin: 0 20px
		align-self: center
		span
			display: block
			font-size: 14px
			border-bottom: dotted 1px

	&-steps
		list-style-type: none
		display: flex
		padding: 0
		counter-reset: list 0
		li
			width: 100px
			position: relative
			padding-left: 20px

			a
				transition: .2s ease-in-out

			&:before
				content: ''
				position: absolute
				top: 7px
				border-style: solid
				border-width: 4px 0 4px 4px
				border-color: transparent transparent transparent red
			&:after
				content: counter(list)""
				display: flex
				transition: .2s ease-in-out
				justify-content: center
				width: 17px
				counter-increment: list
				color: #949494
				line-height: 20px
				font-size: 14px
				background-color: #333333
				border-radius: 3px
				position: absolute
				left: 0
				top: 1px
			&:hover
				a
					color: white
				&:after
					background-color: darken(#EE2222, 10%)
					color: white

			a
				color: #C0C0C0
				font-size: 12px
				font-style: italic
				line-height: 0.9

		li:first-child
			width: 90px
			&:before
				left: 85%
		li:last-child
			width: 75px
			&:before
				display: none
		li:nth-child(2)
			&:before
				left: 87%
		li:nth-child(3)
			width: 110px
			&:before
				left: 90%

	&-auth
		margin-left: auto
		display: flex
		align-items: stretch
		background-color: #92D236
		&__button
			display: flex!important
			align-items: center
			font-size: 14px
			box-shadow: inset 0 -15px 25px rgba(97,178,18,1)
			text-shadow: 1px 1px 0 rgba(0,0,0,0.3)
			padding: 0 20px
			font-weight: bold
			transition: .2s ease
			&:hover
				box-shadow: inset 0 -15px 25px darken(rgba(97,178,18,1), 10%)

// Mobile styles
@media (max-width: 765px)
	.header-content
		padding: 0 20px
		min-height: 50px
		.header-brand
			margin-right: 10px
	.header-steps
		display: none
</style>

