(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{382:function(e,t,s){"use strict";s.r(t);var a=s(24),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"vitess-vs-mysql-mariadb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vitess-vs-mysql-mariadb"}},[e._v("#")]),e._v(" Vitess vs Mysql / Mariadb")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),s("p",[e._v("This decision document has not yet been formatted for nice display...")])]),e._v(" "),s("p",[e._v("Date: 23 August 2019\nDecision: Simple MySQL replicated DB for now. Maybe Vitess later.")]),e._v(" "),s("p",[e._v("Even if OC grows quickly, there is no clear need for vitess for imediate sharding.\nA single master setup (at least for wiki dbs) should suffice, and if it does not the\neasiest step forward for scalability would be to just create 1 more shard and create new\ndbs there, optionally moving old dbs.\nThis would require storing the shard / service / host of the wiki as well as the db name,\nbut this is trivial.")]),e._v(" "),s("p",[e._v("https://vitess.io/docs/user-guides/production-planning/ specifices how much overhead\nvitess would bring to the initial setup, likely resulting in more imediate cost.")]),e._v(" "),s("p",[e._v('It also says:\n"Before running Vitess in production, please make yourself comfortable first with the different operations. We recommend to go through the following scenarios on a non-production system."\nWhich I have not yet done, and don\'t really have time to do, so this seems a bit risky...')]),e._v(" "),s("p",[e._v("Follow up:\nDate: 27 August 2019")]),e._v(" "),s("p",[s("strong",[e._v("Vitess Notes")])]),e._v(" "),s("p",[e._v("Vitess could be used to control all MySQL servers for OpenCura.")]),e._v(" "),s("h3",{attrs:{id:"todo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[e._v("#")]),e._v(" TODO")]),e._v(" "),s("p",[e._v("Make sure mediawiki generally works through vitess....?")]),e._v(" "),s("h3",{attrs:{id:"resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),s("p",[e._v("https://vitess.io/docs/user-guides/production-planning/")]),e._v(" "),s("h3",{attrs:{id:"deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment?")]),e._v(" "),s("p",[e._v("Vitess supports MySQL 5.6, MariaDB 10.0, and any newer versions like MySQL 5.7, etc.\nWe probably want to start working with the operator out of the box.\nhttps://github.com/vitessio/vitess-operator\nhttps://github.com/vitessio/vitess-operator/blob/master/my-vitess.yaml")]),e._v(" "),s("p",[e._v("MySQL users will have to be created with permissions for a set of table prefixes or specific tables\nrather than by db name which is currently done in the general setup.")]),e._v(" "),s("h3",{attrs:{id:"_2x-vgates-master-vs-replica"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2x-vgates-master-vs-replica"}},[e._v("#")]),e._v(" 2x Vgates (master vs replica)")]),e._v(" "),s("p",[e._v("If no tablet type was specified, then VTGate chooses its default, which can be overridden with the -default_tablet_type command line argument.\nDocumented on https://vitess.io/docs/faq/queries/")]),e._v(" "),s("p",[e._v('From slack https://vitess.slack.com/archives/C0PQY0PTK/p1566945049394300:\n"\nYes, you can use the default_tablet_type parameter to specify the default tablet type a vtgate will route queries to.In conjunction with setting the default_tablet_type parameter to either master or replica, you may also want to limit the types of tablets these vtgates can route queries to. This can be accomplished via the allowed_tablet_types VTgate parameter, which enables users to define which tablet types a VTgate is allowed to route queries to:')]),e._v(" "),s("p",[e._v('-allowed_tablet_types value\nSpecifies the tablet types this vtgate is allowed to route queries to\n"')]),e._v(" "),s("h3",{attrs:{id:"keyspaces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyspaces"}},[e._v("#")]),e._v(" Keyspaces")]),e._v(" "),s("p",[e._v("An initial starting point would be to have a single keyspace.\nhttps://vitess.io/docs/concepts/keyspace/\nEssentially a single MySQL DB server running. (cuts down on costs initially).")]),e._v(" "),s("p",[e._v("Vertical sharding can be used to move tables from an unsharded keyspace into a\ndifferent keyspace as described on https://vitess.io/docs/reference/sharding/\nThis will require table names to NOT conflict initially.\nIdea:")]),e._v(" "),s("ul",[s("li",[e._v("Mediawiki DBs will need to use table prefixes, resulting in things like:\nmw_"),s("DBNAME",[e._v("_"),s("tablename",[e._v(" for example.")])],1)],1),e._v(" "),s("li",[e._v("TODO DB table creation needs to be thought about?")]),e._v(" "),s("li",[e._v("TODO API tables should include a table prefix? (can be done with DB_PREFIX)")]),e._v(" "),s("li",[e._v("TODO eventlogging tables should include prefix? (currently mediawiki_revision_create_3)")])]),e._v(" "),s("h3",{attrs:{id:"schema-creation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schema-creation"}},[e._v("#")]),e._v(" Schema Creation")]),e._v(" "),s("p",[e._v('No schema creation should be needed initially.\nPer https://vitess.io/docs/user-guides/mysql-schema/\n"\nYou can apply schema changes directly to MySQL. VTTablet will eventually notice the change and update itself. You can also explicitly issue the vtctlclient ReloadSchema command to make it reload immediately.\n"')])])}),[],!1,null,null,null);t.default=i.exports}}]);