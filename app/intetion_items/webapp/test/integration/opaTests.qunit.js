sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'intetionitems/test/integration/FirstJourney',
		'intetionitems/test/integration/pages/Interactions_HeaderList',
		'intetionitems/test/integration/pages/Interactions_HeaderObjectPage',
		'intetionitems/test/integration/pages/Interactions_ItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, Interactions_HeaderList, Interactions_HeaderObjectPage, Interactions_ItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('intetionitems') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheInteractions_HeaderList: Interactions_HeaderList,
					onTheInteractions_HeaderObjectPage: Interactions_HeaderObjectPage,
					onTheInteractions_ItemsObjectPage: Interactions_ItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);