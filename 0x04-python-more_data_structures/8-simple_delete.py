#!/usr/bin/python3
def simple_delete(a_dictionary, key=""):
    for i in a_dictionary.copy():
        if i == key:
            a_dictionary.pop(key)
    return a_dictionary
