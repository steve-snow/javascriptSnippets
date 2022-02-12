function test(i) {
    
    console.log(i);
    test(++i);

}

test(1);