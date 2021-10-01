const locators = {

    REG: {
        NAME:'[name=firstname]',
        LAST_NAME:'[name=lastname]',
        EMAIL:'[name=reg_email__]',
        CONFIR_EMAIL:'[name=reg_email_confirmation__]',
        PASSWORD:'[name=reg_passwd__]',
        DAY:'[name=birthday_day]',
        MONTH:'[name=birthday_month]',
        YEAR:'[name=birthday_year]',
        SEX_FEM:'input[value="1"]',
        BTN:'[name=websubmit]'


    },
    LOGIN: {
        USER:'[name=email]',
        PASSWORD:'[name=pass]',
        BTN_LOGIN:'[name=login]'
    }

}

export default locators;