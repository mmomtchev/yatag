#!/bin/sh

test() {
    (
        cd $1
        node ../../yatag
        if [ $? -ne 0 ]; then
            node ../../yatag -v
            echo $1 failed
            exit 1
        fi
        diff -bu expected.d.ts index.d.ts
        if [ $? -ne 0 ]; then
            echo
            echo $1 failed
            exit 1
        fi
        echo $1 ok
    )
}

if [ -n "$1" ]; then 
    test test/$1 ;
else
    for TEST in test/*; do
        test ${TEST}
    done
fi