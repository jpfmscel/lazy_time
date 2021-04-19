var _lazy = {
    applyNormalWeekDay : function setTimesWeekDay(){
        document.querySelectorAll('[type=text]')[0].value = '09:30'
        document.querySelectorAll('[type=text]')[0].dispatchEvent(new Event('click'))
        document.querySelectorAll('[type=text]')[0].dispatchEvent(new Event('keydown'))
        document.querySelectorAll('[type=text]')[0].dispatchEvent(new Event('focus'))
        document.querySelectorAll('[type=text]')[0].dispatchEvent(new Event('blur'))

        document.querySelectorAll('[type=text]')[1].value = '19:00'
        document.querySelectorAll('[type=text]')[1].dispatchEvent(new Event('click'))
        document.querySelectorAll('[type=text]')[1].dispatchEvent(new Event('keydown'))
        document.querySelectorAll('[type=text]')[1].dispatchEvent(new Event('focus'))
        document.querySelectorAll('[type=text]')[1].dispatchEvent(new Event('blur'))

        document.querySelectorAll('[type=text]')[2].value = '12:00'
        document.querySelectorAll('[type=text]')[2].dispatchEvent(new Event('click'))
        document.querySelectorAll('[type=text]')[2].dispatchEvent(new Event('keydown'))
        document.querySelectorAll('[type=text]')[2].dispatchEvent(new Event('focus'))
        document.querySelectorAll('[type=text]')[2].dispatchEvent(new Event('blur'))

        document.querySelectorAll('[type=text]')[3].value = '13:00'
        document.querySelectorAll('[type=text]')[3].dispatchEvent(new Event('click'))
        document.querySelectorAll('[type=text]')[3].dispatchEvent(new Event('keydown'))
        document.querySelectorAll('[type=text]')[3].dispatchEvent(new Event('focus'))
        document.querySelectorAll('[type=text]')[3].dispatchEvent(new Event('blur'))
    },

    applyFriDay : function setTimesFriDay(){
        
        document.querySelectorAll('[type=text]')[0].value = '09:30'
        document.querySelectorAll('[type=text]')[0].dispatchEvent(new Event('click'))
        document.querySelectorAll('[type=text]')[0].dispatchEvent(new Event('keydown'))
        document.querySelectorAll('[type=text]')[0].dispatchEvent(new Event('focus'))
        document.querySelectorAll('[type=text]')[0].dispatchEvent(new Event('blur'))

        document.querySelectorAll('[type=text]')[1].value = '17:00'
        document.querySelectorAll('[type=text]')[1].dispatchEvent(new Event('click'))
        document.querySelectorAll('[type=text]')[1].dispatchEvent(new Event('keydown'))
        document.querySelectorAll('[type=text]')[1].dispatchEvent(new Event('focus'))
        document.querySelectorAll('[type=text]')[1].dispatchEvent(new Event('blur'))

        document.querySelectorAll('[type=text]')[2].value = '12:00'
        document.querySelectorAll('[type=text]')[2].dispatchEvent(new Event('click'))
        document.querySelectorAll('[type=text]')[2].dispatchEvent(new Event('keydown'))
        document.querySelectorAll('[type=text]')[2].dispatchEvent(new Event('focus'))
        document.querySelectorAll('[type=text]')[2].dispatchEvent(new Event('blur'))

        document.querySelectorAll('[type=text]')[3].value = '12:30'
        document.querySelectorAll('[type=text]')[3].dispatchEvent(new Event('click'))
        document.querySelectorAll('[type=text]')[3].dispatchEvent(new Event('keydown'))
        document.querySelectorAll('[type=text]')[3].dispatchEvent(new Event('focus'))
        document.querySelectorAll('[type=text]')[3].dispatchEvent(new Event('blur'))

    }
}

