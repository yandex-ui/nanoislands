(function(yr) {

    /**
     * Пока что у dox какие-то проблемы
     * с парсингом имени метода, когда он является полем объекта,
     * поэтому сделаем это вручную
     * 
     * TODO: снести это, когда dox научится парсить имя
     * 
     * @see https://github.com/visionmedia/dox/issues/116
     */
    yr.externals.getNameMethod = function(code) {
        return code.split(':', 1)[0];
    };

}(yr));