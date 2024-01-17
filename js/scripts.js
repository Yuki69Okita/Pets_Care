window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 90,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Datetime picker
    var startDate;
    var endDate;

    $(document).ready(function () {
        $('#reportrange').daterangepicker(
            {
                startDate: moment().subtract('days', 29),
                endDate: moment(),
                minDate: moment(),
                maxDate: '',
                dateLimit: { days: 100 },
                showDropdowns: false,
                showWeekNumbers: false,
                timePicker: false,
                timePickerIncrement: 1,
                timePicker12Hour: false,
                ranges: {
                    'Днес': [moment(), moment()],
                    'Следващите 7 Дни': [moment(), moment().add('days', 6)],
                    'Следващите 30 Дни': [moment(), moment().add('days', 29)],
                },
                opens: 'center',
                buttonClasses: ['btn btn-outline-secondary'],
                applyClass: 'btn btn-outline-success',
                cancelClass: 'btn btn-outline-secondary',
                separator: ' - ',
                locale: {
                    applyLabel: 'Запази',
                    cancelLabel: "Отказване",
                    fromLabel: 'От',
                    toLabel: 'До',
                    customRangeLabel: 'От: До:',
                    daysOfWeek: ['Нед', 'Пон', 'Вто', 'Сря', 'Чет', 'Пет', 'Съб'],
                    monthNames: ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'],
                    firstDay: 1
                }
            },
            function (start, end) {
                console.log();
                $('#reportrange span').html(start.format('DD MM YYYY') + ' - ' + end.format('DD MM YYYY'));
                startDate = start;
                endDate = end;
            }
        );

        $('#reportrange span').html(moment().subtract('days', 29).format('DD MM YYYY') + ' - ' + moment().format('DD MM YYYY'));

        $('#saveBtn').click(function () {
            console.log(startDate.format('DD MM YYYY') + ' - ' + endDate.format('DD MM YYYY'));
        });
    });

});