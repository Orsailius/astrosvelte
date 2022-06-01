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
    <div>
        <!--<video width="1000" controls>
            <track kind="captions">
			<source src={game.video} type="video/ogg">
			Your browser does not support the video tag.
		</video>-->
        <iframe title="video" width="1000" height="500" src={game.video}>
		</iframe>
    </div>
</div>