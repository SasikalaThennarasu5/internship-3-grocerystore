function Pagination({ page, setPage, totalPages }) {

const pages = []

for(let i=1;i<=totalPages;i++){

pages.push(i)

}

return (

<div className="flex justify-center items-center gap-3 mt-10">

<button
onClick={()=>setPage(page-1)}
disabled={page===1}
className="text-gray-500"
>
‹
</button>

{pages.map(p=>(

<button
key={p}
onClick={()=>setPage(p)}
className={`w-8 h-8 rounded-full ${
p===page
? "bg-green-600 text-white"
: "bg-gray-200"
}`}
>

{p}

</button>

))}

<button
onClick={()=>setPage(page+1)}
disabled={page===totalPages}
className="text-gray-500"
>
›
</button>

</div>

)

}

export default Pagination