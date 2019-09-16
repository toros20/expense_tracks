import app from './app';

async function main(){
    await app.listen(4000);
    console.log('SERVER ON');
    
}

main();