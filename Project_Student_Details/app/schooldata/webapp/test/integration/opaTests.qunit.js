sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'schooldata/test/integration/FirstJourney',
		'schooldata/test/integration/pages/SchoolsList',
		'schooldata/test/integration/pages/SchoolsObjectPage',
		'schooldata/test/integration/pages/StudentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, SchoolsList, SchoolsObjectPage, StudentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('schooldata') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSchoolsList: SchoolsList,
					onTheSchoolsObjectPage: SchoolsObjectPage,
					onTheStudentsObjectPage: StudentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);