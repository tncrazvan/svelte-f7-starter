<script>
export let text;
import {
	Button,
	Icon
} from 'framework7-svelte'
import {install, isInstallable} from '../scripts/install'

async function onClick(e){
	if(await install()){
		$isInstallable = false
		location.reload() //makes sure all assets are cached in
	}
}
</script>

	<div class="install-button">
		<Button {onClick} class="p-1 pb-2 pt-2">
			<Icon style="top: -2px" material="add_circle_outline" />&nbsp;
			{text}
		</Button>
	</div>


<style>
	.install-button{
		background-color: #ffffff;
		position: fixed;
		z-index: 10;
		left: 0;
		right: 0;
		bottom: 0;
		border-top: 1px solid rgba(0,0,0,0.125);
	}
</style>
