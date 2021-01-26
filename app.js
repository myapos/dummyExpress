const express = require('express')
const app = express()
const port = 8999

app.get('/api/clusters' , (req, res) => {
  res.status(200).json([
    {
      id: 1,
      name: "Node-1212",
      provider: "AWS",
      state: "active",
      region: "Europe-Frankfurt",
      type: "local",
    },
    {
      id: 2,
      name: "Node-1213",
      provider: "AWS",
      state: "failed",
      region: "Europe-Stockholm",
      type: "local",
    },
    {
      id: 3,
      name: "Node-121123",
      provider: "AWS",
      state: "inactive",
      region: "Asia-Beijing",
      type: "cloud",
    },
    {
      id: 4,
      name: "Node-12132",
      provider: "AWS",
      state: "inactive",
      region: "Asia-Seoul",
      type: "cloud",
    },
  ])
})

app.get('/api/templates' , (req, res) => {
  res.status(200).json([
      {
        ID: 1,
        Name: "Tem965-522346",
        Num_Of_Backups: 2,
        Cores: 5,
        Memory: "32 MB",
        os: "Linux",
        Backups: [
          {
            Bakcup: "BK99029",
            Date: " July 15 2020,20:56",
            Backup_Size: "640 MB",
            ID: 1,
          },
          {
            Bakcup: "BK9988wi",
            Date: " July 14 2020,20:56",
            Backup_Size: "325 MB",
            ID: 2,
          },
        ],
      },
      {
        ID: 2,
        Name: "Tem965-577",
        Num_Of_Backups: 4,
        Cores: 6,
        Memory: "32 MB",
        os: "Linux",
        Backups: [
          {
            Bakcup: "BK99029",
            Date: " July 15 2020,20:56",
            Backup_Size: "640 MB",
            ID: 3,
          },
          {
            Bakcup: "BK9988wi",
            Date: " July 14 2020,20:56",
            Backup_Size: "325 MB",
            ID: 4,
          },
          {
            Bakcup: "BK9988wjk",
            Date: " July 12 2020,20:56",
            Backup_Size: "125 MB",
            ID: 5,
          },
          {
            Bakcup: "BK9988kl",
            Date: " July 10 2020,20:56",
            Backup_Size: "100 MB",
            ID: 6,
          },
        ],
      },
      {
        ID: 3,
        Name: "Tem965-578",
        Num_Of_Backups: 3,
        Cores: 6,
        Memory: "32 MB",
        os: "Linux",
        Backups: [
          {
            Bakcup: "BK9902xv",
            Date: " July 10 2020,20:56",
            Backup_Size: "640 MB",
            ID: 7,
          },
          {
            Bakcup: "BK9988vd",
            Date: " July 11 2020,20:56",
            Backup_Size: "325 MB",
            ID: 8,
          },
          {
            Bakcup: "BK9988wjk",
            Date: " July 9 2020,20:56",
            Backup_Size: "125 MB",
            ID: 9,
          },
        ],
      }
  ])
})

app.get('/api/resource_groups' , (req, res) => {
  res.status(200).json([
    {
    "id":1,
    "name": "name_1",
    "cores_total":20,
    "cores_used":5,
    "memory_total":32000,
    "memory_used":4000,
    "storage_total":160000,
    "storage_used":80000,
    "is_storage_latency_optimized":true,
    "is_cpu_pinning_enabled":true,
    "is_reserved":false,
    "vms":[{
        "id": 1,
        "name": 'Lykos',
        "status": 'Active',
        "os": "Linux",
        "elastic_ip": "192.168.1.1"
      },
      {
        "id": 2,
        "name": 'Lykos_2',
        "status": 'Active',
        "os": "Linux",
        "elastic_ip": "192.168.2.1"
      }
    ],
    "totalVMs": 10,
    "cluster_id":1
  },
  {
    "id":2,
    "name": "name_2",
    "cores_total":25,
    "cores_used":7,
    "memory_total":32000,
    "memory_used":4000,
    "storage_total":160000,
    "storage_used":80000,
    "is_storage_latency_optimized":false,
    "is_cpu_pinning_enabled":false,
    "is_reserved":false,
    "vms":[{
      "id": 1,
      "name": 'Lykos',
      "status": 'Active',
      "os": "Linux",
      "elastic_ip": "192.168.1.1"
      },
      {
        "id": 2,
        "name": 'Lykos_2',
        "status": 'Active',
        "os": "Linux",
        "elastic_ip": "192.168.2.1"
      }
    ],
    "totalVMs": 10,
    "cluster_id":2
  },
  {
    "id":3,
    "name": "name_3",
    "cores_total":30,
    "cores_used":10,
    "memory_total":32000,
    "memory_used":4000,
    "storage_total":160000,
    "storage_used":80000,
    "is_storage_latency_optimized":false,
    "is_cpu_pinning_enabled":false,
    "is_reserved":false,
    "vms":[{
      "id": 1,
      "name": 'Lykos',
      "status": 'Active',
      "os": "Linux",
      "elastic_ip": "192.168.1.1"
      },
      {
        "id": 3,
        "name": 'Lykos_3',
        "status": 'Active',
        "os": "Linux",
        "elastic_ip": "192.168.2.1"
      }
    ],
    "totalVMs": 10,
    "cluster_id":2
  }
])
})


app.use('/api/login', (req, res) => {
    // res.setHeader('Content-Type', 'application/json');

    res.status(200).json({
        ID:0,
        CreatedAt:"0001-01-01T00:00:00Z",
        UpdatedAt:"0001-01-01T00:00:00Z",
        DeletedAt:null,
        username:"sunlight",
        username:"test",
        role:"admin",
        company:"sunlight",
        page_access: ['Users', 'Settings', 'Dashboard', 'About', 'Templates', 'Snapshots', 'Clusters', 'Infrastructure', 'ResourceGroups'],
        phone:"",
        birthday:"",
        token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjF9.Vcp2grZ53t_OG3jwSXsRwfc_UUjboNgZarkAGiX0jgM",
    })

  //   res.status(200).json({
  //     ID:0,
  //     CreatedAt:"0001-01-01T00:00:00Z",
  //     UpdatedAt:"0001-01-01T00:00:00Z",
  //     DeletedAt:null,
  //     username:"test",
  //     role:"viewer",
  //     company:"sunlight",
  //     page_access: ['Users', 'Settings', 'Dashboard', 'About'],
  //     phone:"",
  //     birthday:"",
  //     token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjF9.Vcp2grZ53t_OG3jwSXsRwfc_UUjboNgZarkAGiX0jgM",
  // })

})

/*  initialState: {
        users: {
          users: [
            {
              ID: 1,
              CreatedAt: "2020-09-22T09:34:15+01:00",
              UpdatedAt: "2020-09-22T09:37:40+01:00",
              DeletedAt: null,
              username: "usr1",
              password: "dummyPswd",
              email: "test@test.com",
              role: "admin",
              company: "TestCompany1",
              phone: "",
              birthday: "",
              token: "",
            },
            {
              ID: 2,
              CreatedAt: "2020-09-23T10:39:51+01:00",
              UpdatedAt: "2020-09-23T10:39:51+01:00",
              DeletedAt: null,
              username: "usr2",
              password: "dummyPswd",
              email: "test@test.com",
              role: "viewer",
              company: "TestCompany2",
              phone: "",
              birthday: "",
              token: "",
            },
          ],
        },
      }, */

app.get('/api/users', (req, res) => {
  // res.setHeader('Content-Type', 'application/json');

  res.status(200).json([
    {
      ID: 1,
      CreatedAt: "2020-09-22T09:34:15+01:00",
      UpdatedAt: "2020-09-22T09:37:40+01:00",
      DeletedAt: null,
      username: "sunlight",
      password: "sunlight",
      email: "test@test.com",
      role: "admin",
      company: "TestCompany1",
      phone: "",
      birthday: "",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjF9.Vcp2grZ53t_OG3jwSXsRwfc_UUjboNgZarkAGiX0jgM",
    },
    {
      ID: 2,
      CreatedAt: "2020-09-23T10:39:51+01:00",
      UpdatedAt: "2020-09-23T10:39:51+01:00",
      DeletedAt: null,
      username: "usr2",
      password: "dummyPswd",
      email: "test@test.com",
      role: "viewer",
      company: "TestCompany2",
      phone: "",
      birthday: "",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjF9.Vcp2grZ53t_OG3jwSXsRwfc_UUjboNgZarkAGiX0jgM",
    },
  ],)

})

app.post('/api/users', (req, res) => {
  // res.setHeader('Content-Type', 'application/json');

  res.status(200).json([
    {
      ID: 1,
      CreatedAt: "2020-09-22T09:34:15+01:00",
      UpdatedAt: "2020-09-22T09:37:40+01:00",
      DeletedAt: null,
      username: "sunlight",
      password: "sunlight",
      email: "test@test.com",
      role: "admin",
      company: "TestCompany1",
      phone: "",
      birthday: "",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjF9.Vcp2grZ53t_OG3jwSXsRwfc_UUjboNgZarkAGiX0jgM",
    },
    {
      ID: 2,
      CreatedAt: "2020-09-23T10:39:51+01:00",
      UpdatedAt: "2020-09-23T10:39:51+01:00",
      DeletedAt: null,
      username: "usr2",
      password: "dummyPswd",
      email: "test@test.com",
      role: "viewer",
      company: "TestCompany2",
      phone: "",
      birthday: "",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjF9.Vcp2grZ53t_OG3jwSXsRwfc_UUjboNgZarkAGiX0jgM",
    },
    {
      ID: 3,
      CreatedAt: "2020-09-23T10:39:51+01:00",
      UpdatedAt: "2020-09-23T10:39:51+01:00",
      DeletedAt: null,
      username: "usr2",
      password: "dummyPswd",
      email: "test@test.com",
      role: "viewer",
      company: "TestCompany2",
      phone: "",
      birthday: "",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjF9.Vcp2grZ53t_OG3jwSXsRwfc_UUjboNgZarkAGiX0jgM",
    },
  ],)

})

app.get('/api/roles', (req,res) => {
  res.status(200).json([
    {
      "ID": 1,
      "name": "admin",
      "status": "Enabled",
      "permissions": "",
      "number_users": 1
    }
  ])
})

app.delete('/api/users/:id', (req, res) => {
  // res.setHeader('Content-Type', 'application/json');
  console.log('deleting',req.params);
  res.status(200).json([
    {
      ID: 1,
      CreatedAt: "2020-09-22T09:34:15+01:00",
      UpdatedAt: "2020-09-22T09:37:40+01:00",
      DeletedAt: null,
      username: "sunlight",
      password: "sunlight",
      email: "test@test.com",
      role: "admin",
      company: "TestCompany1",
      phone: "",
      birthday: "",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjF9.Vcp2grZ53t_OG3jwSXsRwfc_UUjboNgZarkAGiX0jgM",
    },
    {
      ID: 2,
      CreatedAt: "2020-09-23T10:39:51+01:00",
      UpdatedAt: "2020-09-23T10:39:51+01:00",
      DeletedAt: null,
      username: "usr2",
      password: "dummyPswd",
      email: "test@test.com",
      role: "viewer",
      company: "TestCompany2",
      phone: "",
      birthday: "",
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjF9.Vcp2grZ53t_OG3jwSXsRwfc_UUjboNgZarkAGiX0jgM",
    },
  ])

})

app.get('/api/snapshots', (req,res) => {
  res.status(200).json([
    {
      ID: 1,
      Cluster: "Na8564-Wave",
      Region: " Europe-Denmark",
      Vm: "VM-Nathan",
      Timestamp: "12/02/2021, 08:00 (+2GMT)",
      Size: "600MB",
      Frequency: "Daily",
      status: "Active",
    },
    {
      ID: 2,
      Cluster: "Na8564-Wave",
      Region: " Europe-Denmark",
      Vm: "VM-Nathan",
      Timestamp: "12/02/2021, 08:00 (+2GMT)",
      Size: "500MB",
      Frequency: "Daily",
      status: "Inactive",
    },
    {
      ID: 3,
      Cluster: "Na8564-Wave",
      Region: " Europe-Denmark",
      Vm: "VM-Nathan",
      Timestamp: "12/02/2021, 08:00 (+2GMT)",
      Size: "500MB",
      Frequency: "Daily",
      status: "Inactive",
    },
    {
      ID: 4,
      Cluster: "Na8564-Wave",
      Region: " Europe-Denmark",
      Vm: "VM-Nathan",
      Timestamp: "12/02/2021, 08:00 (+2GMT)",
      Size: "500MB",
      Frequency: "Daily",
      status: "Active",
    },
  ])
})


app.get('/api/snapshotsqueue', (req,res) => {
  res.status(200).json([
    {
      ID: 1,
      Cluster: "Na8564-Wave",
      Region: " Europe-Denmark",
      Vm: "VM-Nathan",
      TimeToComplete: "20 minutes left",
      Progress: "60%",
    },
    {
      ID: 2,
      Cluster: "Na8565-Wave",
      Region: " Europe-Denmark",
      Vm: "VM-Nathan",
      TimeToComplete: "20 minutes left",
      Progress: "60%",
    },
    {
      ID: 3,
      Cluster: "Na8566-Wave",
      Region: " Europe-Denmark",
      Vm: "VM-Nathan",
      TimeToComplete: "20 minutes left",
      Progress: "60%",
    },
    {
      ID: 4,
      Cluster: "Na8567-Wave",
      Region: " Europe-Denmark",
      Vm: "VM-Nathan",
      TimeToComplete: "20 minutes left",
      Progress: "60%",
    },
  ])
})


app.get('/saus/testNewCall', (req,res) => {
  console.log('------------RECEIVED GET REQUEST --------------')
  res.status(200).json([
    {
      "url": "https://api.github.com/repos/myapos/testing_repo/issues/35",
      "repository_url": "https://api.github.com/repos/myapos/testing_repo",
      "labels_url": "https://api.github.com/repos/myapos/testing_repo/issues/35/labels{/name}",
      "comments_url": "https://api.github.com/repos/myapos/testing_repo/issues/35/comments",
      "events_url": "https://api.github.com/repos/myapos/testing_repo/issues/35/events",
      "html_url": "https://github.com/myapos/testing_repo/issues/35",
      "id": 748385190,
      "node_id": "MDU6SXNzdWU3NDgzODUxOTA=",
      "number": 35,
      "title": "a new one",
      "user": {
        "login": "iotheo",
        "id": 22287199,
        "node_id": "MDQ6VXNlcjIyMjg3MTk5",
        "avatar_url": "https://avatars3.githubusercontent.com/u/22287199?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/iotheo",
        "html_url": "https://github.com/iotheo",
        "followers_url": "https://api.github.com/users/iotheo/followers",
        "following_url": "https://api.github.com/users/iotheo/following{/other_user}",
        "gists_url": "https://api.github.com/users/iotheo/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/iotheo/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/iotheo/subscriptions",
        "organizations_url": "https://api.github.com/users/iotheo/orgs",
        "repos_url": "https://api.github.com/users/iotheo/repos",
        "events_url": "https://api.github.com/users/iotheo/events{/privacy}",
        "received_events_url": "https://api.github.com/users/iotheo/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2020-11-23T00:14:05Z",
      "updated_at": "2020-11-23T00:14:05Z",
      "closed_at": null,
      "author_association": "COLLABORATOR",
      "active_lock_reason": null,
      "body": "",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/myapos/testing_repo/issues/17",
      "repository_url": "https://api.github.com/repos/myapos/testing_repo",
      "labels_url": "https://api.github.com/repos/myapos/testing_repo/issues/17/labels{/name}",
      "comments_url": "https://api.github.com/repos/myapos/testing_repo/issues/17/comments",
      "events_url": "https://api.github.com/repos/myapos/testing_repo/issues/17/events",
      "html_url": "https://github.com/myapos/testing_repo/issues/17",
      "id": 746668788,
      "node_id": "MDU6SXNzdWU3NDY2Njg3ODg=",
      "number": 17,
      "title": "test me now ",
      "user": {
        "login": "iotheo",
        "id": 22287199,
        "node_id": "MDQ6VXNlcjIyMjg3MTk5",
        "avatar_url": "https://avatars3.githubusercontent.com/u/22287199?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/iotheo",
        "html_url": "https://github.com/iotheo",
        "followers_url": "https://api.github.com/users/iotheo/followers",
        "following_url": "https://api.github.com/users/iotheo/following{/other_user}",
        "gists_url": "https://api.github.com/users/iotheo/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/iotheo/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/iotheo/subscriptions",
        "organizations_url": "https://api.github.com/users/iotheo/orgs",
        "repos_url": "https://api.github.com/users/iotheo/repos",
        "events_url": "https://api.github.com/users/iotheo/events{/privacy}",
        "received_events_url": "https://api.github.com/users/iotheo/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2020-11-19T15:10:14Z",
      "updated_at": "2020-11-19T15:10:14Z",
      "closed_at": null,
      "author_association": "COLLABORATOR",
      "active_lock_reason": null,
      "body": "please",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/myapos/testing_repo/issues/16",
      "repository_url": "https://api.github.com/repos/myapos/testing_repo",
      "labels_url": "https://api.github.com/repos/myapos/testing_repo/issues/16/labels{/name}",
      "comments_url": "https://api.github.com/repos/myapos/testing_repo/issues/16/comments",
      "events_url": "https://api.github.com/repos/myapos/testing_repo/issues/16/events",
      "html_url": "https://github.com/myapos/testing_repo/issues/16",
      "id": 746667989,
      "node_id": "MDU6SXNzdWU3NDY2Njc5ODk=",
      "number": 16,
      "title": "safasd",
      "user": {
        "login": "iotheo",
        "id": 22287199,
        "node_id": "MDQ6VXNlcjIyMjg3MTk5",
        "avatar_url": "https://avatars3.githubusercontent.com/u/22287199?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/iotheo",
        "html_url": "https://github.com/iotheo",
        "followers_url": "https://api.github.com/users/iotheo/followers",
        "following_url": "https://api.github.com/users/iotheo/following{/other_user}",
        "gists_url": "https://api.github.com/users/iotheo/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/iotheo/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/iotheo/subscriptions",
        "organizations_url": "https://api.github.com/users/iotheo/orgs",
        "repos_url": "https://api.github.com/users/iotheo/repos",
        "events_url": "https://api.github.com/users/iotheo/events{/privacy}",
        "received_events_url": "https://api.github.com/users/iotheo/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2020-11-19T15:09:20Z",
      "updated_at": "2020-11-19T15:09:20Z",
      "closed_at": null,
      "author_association": "COLLABORATOR",
      "active_lock_reason": null,
      "body": "fasdfasd",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/myapos/testing_repo/issues/6",
      "repository_url": "https://api.github.com/repos/myapos/testing_repo",
      "labels_url": "https://api.github.com/repos/myapos/testing_repo/issues/6/labels{/name}",
      "comments_url": "https://api.github.com/repos/myapos/testing_repo/issues/6/comments",
      "events_url": "https://api.github.com/repos/myapos/testing_repo/issues/6/events",
      "html_url": "https://github.com/myapos/testing_repo/issues/6",
      "id": 743309217,
      "node_id": "MDU6SXNzdWU3NDMzMDkyMTc=",
      "number": 6,
      "title": "New logo v2",
      "user": {
        "login": "myapos",
        "id": 6097052,
        "node_id": "MDQ6VXNlcjYwOTcwNTI=",
        "avatar_url": "https://avatars1.githubusercontent.com/u/6097052?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/myapos",
        "html_url": "https://github.com/myapos",
        "followers_url": "https://api.github.com/users/myapos/followers",
        "following_url": "https://api.github.com/users/myapos/following{/other_user}",
        "gists_url": "https://api.github.com/users/myapos/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/myapos/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/myapos/subscriptions",
        "organizations_url": "https://api.github.com/users/myapos/orgs",
        "repos_url": "https://api.github.com/users/myapos/repos",
        "events_url": "https://api.github.com/users/myapos/events{/privacy}",
        "received_events_url": "https://api.github.com/users/myapos/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2020-11-15T17:57:43Z",
      "updated_at": "2020-11-15T17:57:43Z",
      "closed_at": null,
      "author_association": "OWNER",
      "active_lock_reason": null,
      "body": "We should have one",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/myapos/testing_repo/issues/5",
      "repository_url": "https://api.github.com/repos/myapos/testing_repo",
      "labels_url": "https://api.github.com/repos/myapos/testing_repo/issues/5/labels{/name}",
      "comments_url": "https://api.github.com/repos/myapos/testing_repo/issues/5/comments",
      "events_url": "https://api.github.com/repos/myapos/testing_repo/issues/5/events",
      "html_url": "https://github.com/myapos/testing_repo/issues/5",
      "id": 743298251,
      "node_id": "MDU6SXNzdWU3NDMyOTgyNTE=",
      "number": 5,
      "title": "Issue created with API",
      "user": {
        "login": "myapos",
        "id": 6097052,
        "node_id": "MDQ6VXNlcjYwOTcwNTI=",
        "avatar_url": "https://avatars1.githubusercontent.com/u/6097052?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/myapos",
        "html_url": "https://github.com/myapos",
        "followers_url": "https://api.github.com/users/myapos/followers",
        "following_url": "https://api.github.com/users/myapos/following{/other_user}",
        "gists_url": "https://api.github.com/users/myapos/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/myapos/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/myapos/subscriptions",
        "organizations_url": "https://api.github.com/users/myapos/orgs",
        "repos_url": "https://api.github.com/users/myapos/repos",
        "events_url": "https://api.github.com/users/myapos/events{/privacy}",
        "received_events_url": "https://api.github.com/users/myapos/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [
        {
          "id": 2507580017,
          "node_id": "MDU6TGFiZWwyNTA3NTgwMDE3",
          "url": "https://api.github.com/repos/myapos/testing_repo/labels/design",
          "name": "design",
          "color": "ededed",
          "default": false,
          "description": null
        }
      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2020-11-15T17:00:55Z",
      "updated_at": "2020-11-15T17:00:55Z",
      "closed_at": null,
      "author_association": "OWNER",
      "active_lock_reason": null,
      "body": "Test description",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/myapos/testing_repo/issues/4",
      "repository_url": "https://api.github.com/repos/myapos/testing_repo",
      "labels_url": "https://api.github.com/repos/myapos/testing_repo/issues/4/labels{/name}",
      "comments_url": "https://api.github.com/repos/myapos/testing_repo/issues/4/comments",
      "events_url": "https://api.github.com/repos/myapos/testing_repo/issues/4/events",
      "html_url": "https://github.com/myapos/testing_repo/issues/4",
      "id": 743297964,
      "node_id": "MDU6SXNzdWU3NDMyOTc5NjQ=",
      "number": 4,
      "title": "New logo",
      "user": {
        "login": "myapos",
        "id": 6097052,
        "node_id": "MDQ6VXNlcjYwOTcwNTI=",
        "avatar_url": "https://avatars1.githubusercontent.com/u/6097052?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/myapos",
        "html_url": "https://github.com/myapos",
        "followers_url": "https://api.github.com/users/myapos/followers",
        "following_url": "https://api.github.com/users/myapos/following{/other_user}",
        "gists_url": "https://api.github.com/users/myapos/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/myapos/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/myapos/subscriptions",
        "organizations_url": "https://api.github.com/users/myapos/orgs",
        "repos_url": "https://api.github.com/users/myapos/repos",
        "events_url": "https://api.github.com/users/myapos/events{/privacy}",
        "received_events_url": "https://api.github.com/users/myapos/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2020-11-15T16:59:25Z",
      "updated_at": "2020-11-15T16:59:25Z",
      "closed_at": null,
      "author_association": "OWNER",
      "active_lock_reason": null,
      "body": "We should have one",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/myapos/testing_repo/issues/3",
      "repository_url": "https://api.github.com/repos/myapos/testing_repo",
      "labels_url": "https://api.github.com/repos/myapos/testing_repo/issues/3/labels{/name}",
      "comments_url": "https://api.github.com/repos/myapos/testing_repo/issues/3/comments",
      "events_url": "https://api.github.com/repos/myapos/testing_repo/issues/3/events",
      "html_url": "https://github.com/myapos/testing_repo/issues/3",
      "id": 743268871,
      "node_id": "MDU6SXNzdWU3NDMyNjg4NzE=",
      "number": 3,
      "title": "The footer does not appear in mobile devices",
      "user": {
        "login": "myapos",
        "id": 6097052,
        "node_id": "MDQ6VXNlcjYwOTcwNTI=",
        "avatar_url": "https://avatars1.githubusercontent.com/u/6097052?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/myapos",
        "html_url": "https://github.com/myapos",
        "followers_url": "https://api.github.com/users/myapos/followers",
        "following_url": "https://api.github.com/users/myapos/following{/other_user}",
        "gists_url": "https://api.github.com/users/myapos/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/myapos/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/myapos/subscriptions",
        "organizations_url": "https://api.github.com/users/myapos/orgs",
        "repos_url": "https://api.github.com/users/myapos/repos",
        "events_url": "https://api.github.com/users/myapos/events{/privacy}",
        "received_events_url": "https://api.github.com/users/myapos/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2020-11-15T14:31:15Z",
      "updated_at": "2020-11-15T14:31:15Z",
      "closed_at": null,
      "author_association": "OWNER",
      "active_lock_reason": null,
      "body": "Test description for the issue 'The footer does not appear in mobile devices'",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/myapos/testing_repo/issues/2",
      "repository_url": "https://api.github.com/repos/myapos/testing_repo",
      "labels_url": "https://api.github.com/repos/myapos/testing_repo/issues/2/labels{/name}",
      "comments_url": "https://api.github.com/repos/myapos/testing_repo/issues/2/comments",
      "events_url": "https://api.github.com/repos/myapos/testing_repo/issues/2/events",
      "html_url": "https://github.com/myapos/testing_repo/issues/2",
      "id": 743268736,
      "node_id": "MDU6SXNzdWU3NDMyNjg3MzY=",
      "number": 2,
      "title": "The header is not responsive",
      "user": {
        "login": "myapos",
        "id": 6097052,
        "node_id": "MDQ6VXNlcjYwOTcwNTI=",
        "avatar_url": "https://avatars1.githubusercontent.com/u/6097052?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/myapos",
        "html_url": "https://github.com/myapos",
        "followers_url": "https://api.github.com/users/myapos/followers",
        "following_url": "https://api.github.com/users/myapos/following{/other_user}",
        "gists_url": "https://api.github.com/users/myapos/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/myapos/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/myapos/subscriptions",
        "organizations_url": "https://api.github.com/users/myapos/orgs",
        "repos_url": "https://api.github.com/users/myapos/repos",
        "events_url": "https://api.github.com/users/myapos/events{/privacy}",
        "received_events_url": "https://api.github.com/users/myapos/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2020-11-15T14:30:32Z",
      "updated_at": "2020-11-15T14:30:32Z",
      "closed_at": null,
      "author_association": "OWNER",
      "active_lock_reason": null,
      "body": "Test description for the issue the header is not responsive",
      "performed_via_github_app": null
    },
    {
      "url": "https://api.github.com/repos/myapos/testing_repo/issues/1",
      "repository_url": "https://api.github.com/repos/myapos/testing_repo",
      "labels_url": "https://api.github.com/repos/myapos/testing_repo/issues/1/labels{/name}",
      "comments_url": "https://api.github.com/repos/myapos/testing_repo/issues/1/comments",
      "events_url": "https://api.github.com/repos/myapos/testing_repo/issues/1/events",
      "html_url": "https://github.com/myapos/testing_repo/issues/1",
      "id": 743268621,
      "node_id": "MDU6SXNzdWU3NDMyNjg2MjE=",
      "number": 1,
      "title": "Submit is not clickable",
      "user": {
        "login": "myapos",
        "id": 6097052,
        "node_id": "MDQ6VXNlcjYwOTcwNTI=",
        "avatar_url": "https://avatars1.githubusercontent.com/u/6097052?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/myapos",
        "html_url": "https://github.com/myapos",
        "followers_url": "https://api.github.com/users/myapos/followers",
        "following_url": "https://api.github.com/users/myapos/following{/other_user}",
        "gists_url": "https://api.github.com/users/myapos/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/myapos/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/myapos/subscriptions",
        "organizations_url": "https://api.github.com/users/myapos/orgs",
        "repos_url": "https://api.github.com/users/myapos/repos",
        "events_url": "https://api.github.com/users/myapos/events{/privacy}",
        "received_events_url": "https://api.github.com/users/myapos/received_events",
        "type": "User",
        "site_admin": false
      },
      "labels": [

      ],
      "state": "open",
      "locked": false,
      "assignee": null,
      "assignees": [

      ],
      "milestone": null,
      "comments": 0,
      "created_at": "2020-11-15T14:29:53Z",
      "updated_at": "2020-11-15T14:29:53Z",
      "closed_at": null,
      "author_association": "OWNER",
      "active_lock_reason": null,
      "body": "Test description for SUbmit btn not clickable",
      "performed_via_github_app": null
    }
  ])
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/* ID(pin):0
CreatedAt(pin):"0001-01-01T00:00:00Z"
UpdatedAt(pin):"0001-01-01T00:00:00Z"
DeletedAt(pin):null
username(pin):"sunlight"
role(pin):"admin"
company(pin):"sunlight"
phone(pin):""
birthday(pin):""
token(pin):"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjF9.Vcp2grZ53t_OG3jwSXsRwfc_UUjboNgZarkAGiX0jgM" */