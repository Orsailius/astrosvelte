<script>
    export let games;

    import Game from "./Game.svelte";

    var currentGame = games[0].name;

    function handleClick(name)
    {
		currentGame = name;
	}
</script>

<div class="flex flex-row hero">
    <div class="w-1/5 pl-15">
       <div class="grid grid-cols-1">
           <ul class="menu p-4 overflow-y-auto bg-base-100 text-base-content">
                {#each games as {name}, i}
                    <li><button class="btn glass" on:click={() => handleClick(name)} >{name}</button></li>
                {/each}
           </ul>  
       </div>
   </div>
   <div class="divider divider-horizontal"></div>
   <div class="w-4/5 pr-4 pb-10">		
        {#each games as game}
            {#if game.name == currentGame}
                <Game game={game}/>
            {/if}
        {/each}
    </div>
</div>
