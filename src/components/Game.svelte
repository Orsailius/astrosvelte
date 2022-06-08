<script>
    export let game;
</script>

<div>
    <h2 class="text-4xl font-bold pt-5">
        {game.name}
    </h2>
    <p class="text-lg pt-4 pb-5">
        {game.body}
    </p>
    <div style="position:relative;padding-bottom:56.25%;">
        <iframe title="video" 
            style="width:100%;height:100%;position:absolute;left:0px;top:0px;" 
            width="100%" height="100%" 
            frameborder="0" allowfullscreen
            src={game.video}>
		</iframe>
    </div>
</div>