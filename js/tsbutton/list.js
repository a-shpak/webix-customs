export const items = [
    { "id":2, title:"The Godfather", year:1972, rank:2 },
    { "id":4, title:"The Godfather: Part III", year:1976, rank:4 },
    { "id":3, title:"The Godfather: Part II", year:1974, rank:3 },
    { "id":1, title:"The Shawshank Redemption", year:1994, rank:1 },
];

export const list = {  
    id:"list",
    view:"list",
    type:{
        height:60,
    },
    data:items,
    template:"<span style=\"font-weight:bold;\">#id#. #title#</span><div>Year: #year#, rank:#rank#</div>",
    autoheight:true,
};
