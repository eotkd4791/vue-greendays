<template>
	<div class="footer">
		<QuickMenu />
		<ContactInfo />
		<AboutGreendays />
		<ChannelTalk />
	</div>
</template>

<script>
import QuickMenu from '@/components/QuickMenu.vue';
import ContactInfo from '@/components/ContactInfo.vue';
import AboutGreendays from '@/components/About.vue';
import ChannelTalk from '@/components/ChannelTalk.vue';

export default {
	components: {
		QuickMenu,
		ContactInfo,
		AboutGreendays,
		ChannelTalk
	}
};
</script>

<style scoped>
.footer {
	margin: 0;
}
</style>
