const { CosmWasmClient} = require("@cosmjs/cosmwasm-stargate");

async function query() {
    var client = await CosmWasmClient.connect("https://rpc.juno.omniflix.co/")
    queryMsg = {balance: { address: "juno1fkg9kmfa60ckg2syvnz7vxgtkpetmqdnzaxdnz"}}
    let query_output = await client.queryContractSmart("juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa", queryMsg);
    console.log(query_output);
}

query()
