const obj={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift'
}
//forof-error

for (const i in obj) {
    console.log(i,':-', obj[i]);    
}