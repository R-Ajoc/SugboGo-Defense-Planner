/* Edit this file to adjust the plan. Keep task IDs stable to preserve saved progress. */
'use strict';
window.PLANNER_PHASES = [
  {
    id: 'prepare', dates: 'Nov 11–12', title: 'Prepare & organize', start: '2026-11-11', end: '2026-11-12',
    description: 'Get ready for Phase 2, arrange respondents, and move the manuscript forward while deployment is underway.',
    days: [
      { id: 'nov11', label: 'Nov 11', title: 'Prepare and organize', groups: [
        ['App & Phase 2 testing', [
          'Check deployment progress with the person handling the backend.',
          'List the essential user and merchant flows to test.',
          'Prepare the Phase 2 checklist: scenario, steps, expected result, actual result, pass/fail, and remarks.',
          'Prepare test accounts and sample data.',
          'Create a shared issue tracker and assign who will test each flow.'
        ]],
        ['Questionnaires', [
          'Gather the latest user, merchant, and technical questionnaires.',
          'Check that questions match the study objectives and evaluation criteria.',
          'Review wording, instructions, response scales, and required fields.',
          'Check consent and respondent information.',
          'List questions or changes that need adviser confirmation.'
        ]],
        ['Businesses & respondents', [
          'Confirm the permitted representative sample for each respondent group.',
          'Search for eligible businesses within the study’s scope.',
          'Create a contact list: business/name, contact details, availability, and response status.',
          'Identify backup businesses and respondents in case someone declines.',
          'Send initial invitations to users, merchants, and programmer evaluators.',
          'Explain the purpose, expected time commitment, and tentative evaluation dates.'
        ]],
        ['Manuscript', [
          'Gather adviser comments and identify unfinished sections.',
          'Create one revision checklist, ordered by priority.',
          'Assign sections to available helpers.',
          'Start revisions that do not depend on evaluation results.',
          'Mark sections awaiting deployment details, screenshots, or results.'
        ]]
      ]},
      { id: 'nov12', label: 'Nov 12', title: 'Finalize and confirm', groups: [
        ['App & Phase 2 testing', [
          'Check deployment status and record any blockers.',
          'If deployment is ready, check login and essential user and merchant functions.',
          'Finalize the Phase 2 checklist.',
          'Confirm testers, test accounts, devices, and assignments.',
          'Schedule Phase 2 testing for November 13–14.'
        ]],
        ['Questionnaires', [
          'Resolve review comments and obtain any required adviser confirmation.',
          'Try each questionnaire with a teammate to catch confusing questions.',
          'Verify that online forms open, accept responses, and save them correctly.',
          'Finalize the questionnaires and save a master copy.'
        ]],
        ['Businesses & respondents', [
          'Follow up on invitations and contact additional prospects where needed.',
          'Confirm enough respondents for each approved sample.',
          'Record confirmed participants and backup contacts.',
          'Arrange tentative user and merchant sessions for November 16–17.',
          'Book programmer evaluators for November 16–17, after Phase 2 completion.',
          'Share participation instructions and appointment details.'
        ]],
        ['Manuscript & coordination', [
          'Continue priority revisions and combine completed sections.',
          'Check that the methodology accurately describes the approved sampling and testing procedures.',
          'Prepare placeholders for results, tables, and final screenshots.',
          'Review progress with the team and assign remaining tasks.',
          'Save a dated backup of the manuscript and testing materials.'
        ]],
        ['End-of-day readiness', [
          'Phase 2 checklist, testers, accounts, and schedule are ready.',
          'Questionnaires are reviewed and ready for use.',
          'Respondent recruitment is underway, with confirmations tracked.',
          'Technical evaluation appointments are arranged.',
          'Manuscript revisions are progressing, with clear owners and deadlines.',
          'Deployment blockers have an assigned owner and next action.'
        ]]
      ]}
    ]
  },
  { id: 'phase2', dates: 'Nov 13–14', title: 'Run Phase 2 testing', start: '2026-11-13', end: '2026-11-14',
    description: 'Test the deployed app, record problems, and prioritize fixes that prevent essential tasks from working.',
    days: [{ id: 'nov13-14', label: 'Nov 13–14', title: 'Test and document', groups: [
      ['App & testing', ['Conduct Phase 2 testing using the agreed checklist.', 'Record actual results and evidence for each test.', 'Assign reported issues and prioritize broken core flows.']],
      ['Respondents', ['Confirm user and merchant availability.', 'Prepare evaluation instructions and follow up on invitations.']],
      ['Manuscript', ['Update implementation details, screenshots, and testing procedures.', 'Leave clearly marked spaces for evaluation results.']]
    ]}] },
  { id: 'verify', dates: 'Nov 15', title: 'Fix & verify', start: '2026-11-15', end: '2026-11-15',
    description: 'Readiness checkpoint: essential user and merchant flows must work before formal evaluation.',
    days: [{ id: 'nov15', label: 'Nov 15', title: 'Ready for evaluation', groups: [
      ['App & testing', ['Fix Phase 2 issues affecting essential flows.', 'Retest fixes and document the verified results.', 'Confirm that Phase 2 is complete before technical evaluation.']],
      ['Respondents', ['Finalize evaluation appointments.', 'Prepare the stable app version respondents will use.']],
      ['Manuscript', ['Finish revisions that can be completed without evaluation data.']]
    ]}] },
  { id: 'evaluate', dates: 'Nov 16–17', title: 'Evaluate with respondents', start: '2026-11-16', end: '2026-11-17',
    description: 'Programmers evaluate after Phase 2. Users and merchants can evaluate the stable app in parallel.',
    days: [{ id: 'nov16-17', label: 'Nov 16–17', title: 'Collect evaluations', groups: [
      ['Technical testing', ['Conduct technical testing with programmers after Phase 2 completion.', 'Record technical findings and address critical issues.']],
      ['Users & merchants', ['Run user evaluations on the stable app.', 'Run merchant evaluations on the stable app.', 'Track completed responses against each approved sample.']],
      ['Manuscript & evidence', ['Save testing evidence and evaluation records.', 'Organize incoming responses and begin preparing result tables.']]
    ]}] },
  { id: 'results', dates: 'Nov 18', title: 'Close & analyze results', start: '2026-11-18', end: '2026-11-18',
    description: 'Close evaluations, verify fixes, and turn the responses into clear manuscript findings.',
    days: [{ id: 'nov18', label: 'Nov 18', title: 'Complete the results', groups: [
      ['App', ['Verify fixes from technical testing.', 'Keep development focused on defects; avoid adding new features.']],
      ['Evaluations', ['Complete remaining evaluation sessions.', 'Check response completeness and summarize results.']],
      ['Manuscript', ['Prepare final result tables.', 'Write the results and discussion, explaining findings and limitations.']]
    ]}] },
  { id: 'draft', dates: 'Nov 19', title: 'Complete the full draft', start: '2026-11-19', end: '2026-11-19',
    description: 'Bring the manuscript, slides, and demonstration together for review.',
    days: [{ id: 'nov19', label: 'Nov 19', title: 'Ready for review', groups: [
      ['App & evidence', ['Complete final app checks and prepare the demonstration setup.', 'Resolve missing or unclear evaluation records.']],
      ['Manuscript & slides', ['Complete the full manuscript, conclusions, and recommendations.', 'Complete presentation slides and align claims with the manuscript.', 'Send the complete draft for adviser and team review.']]
    ]}] },
  { id: 'finish', dates: 'Nov 20', title: 'Finalize everything', start: '2026-11-20', end: '2026-11-20',
    description: 'The finish line and buffer day. Complete all deliverables so rehearsal time stays protected.',
    days: [{ id: 'nov20', label: 'Nov 20', title: 'Finish and back up', groups: [
      ['App & demonstration', ['Resolve remaining critical issues.', 'Save app and project backups.', 'Record a backup demonstration.']],
      ['Final deliverables', ['Finalize evaluation documentation and supporting evidence.', 'Apply final adviser and team corrections.', 'Check manuscript formatting, references, and appendices.', 'Check consistency between the app, manuscript, and slides.', 'Save the final manuscript and presentation copies.']]
    ]}] },
  { id: 'rehearse', dates: 'Nov 21–22', title: 'Practice & prepare', start: '2026-11-21', end: '2026-11-22',
    description: 'Use these two days for timed rehearsals, panel questions, and presentation readiness.',
    days: [
      { id: 'nov21', label: 'Nov 21', title: 'Full rehearsal', groups: [
        ['Rehearsal', ['Assign and confirm speaking parts.', 'Run a full timed rehearsal.', 'Practice the live demonstration and backup procedure.', 'Practice likely panel questions and note weak answers.']]
      ]},
      { id: 'nov22', label: 'Nov 22', title: 'Final preparation', groups: [
        ['Presentation readiness', ['Check devices, accounts, internet access, and backup files.', 'Run the final rehearsal and make only light corrections.', 'Prepare submission and presentation copies.', 'Rest and prepare for defense day.']]
      ]}
    ] },
  { id: 'defense', dates: 'Nov 23', title: 'Defense day', start: '2026-11-23', end: '2026-11-23',
    description: 'Bring the work together. You have prepared the app, evidence, manuscript, and presentation.',
    days: [{ id: 'nov23', label: 'Nov 23', title: 'Present with confidence', groups: [
      ['Before presenting', ['Bring final presentation and manuscript copies.', 'Check the demonstration setup and backup recording.', 'Confirm the presentation order with the team.']]
    ]}] }
];

window.PLANNER_PHASES.forEach(phase => phase.days.forEach(day => {
  day.groups = day.groups.map(([title, texts], groupIndex) => ({
    title, tasks: texts.map((text, taskIndex) => ({ id: `${day.id}-${groupIndex}-${taskIndex}`, text }))
  }));
}));
