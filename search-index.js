var searchIndex = {};
searchIndex["shiplift"] = {"doc":"Shiplift is a multi-transport utility for maneuvering [docker](https://www.docker.com/) containers","items":[[3,"Docker","shiplift","Entrypoint interface for communicating with docker daemon",null,null],[3,"Image","","Interface for accessing and manipulating a named docker image",null,null],[3,"Images","","Interface for docker images",null,null],[3,"Container","","Interface for accessing and manipulating a docker container",null,null],[3,"Containers","","Interface for docker containers",null,null],[0,"builder","","Interfaces for building various structures",null,null],[3,"PullOptions","shiplift::builder","",null,null],[3,"PullOptionsBuilder","","",null,null],[3,"BuildOptions","","",null,null],[12,"path","","",0,null],[3,"BuildOptionsBuilder","","",null,null],[3,"ContainerListOptions","","Options for filtering container list results",null,null],[3,"ContainerListOptionsBuilder","","Builder interface for `ContainerListOptions`",null,null],[3,"ContainerOptions","","Interface for building a new docker container from an existing image",null,null],[12,"name","","",1,null],[3,"ContainerOptionsBuilder","","",null,null],[3,"ExecContainerOptions","","",null,null],[3,"ExecContainerOptionsBuilder","","",null,null],[3,"EventsOptions","","Options for filtering streams of Docker events",null,null],[3,"EventsOptionsBuilder","","Builder interface for `EventOptions`",null,null],[3,"LogsOptions","","Options for controlling log request results",null,null],[3,"LogsOptionsBuilder","","Builder interface for `LogsOptions`",null,null],[3,"ImageListOptions","","Options for filtering image list results",null,null],[3,"ImageListOptionsBuilder","","Builder interface for `ImageListOptions`",null,null],[3,"RmContainerOptions","","Options for controlling log request results",null,null],[3,"RmContainerOptionsBuilder","","Builder interface for `LogsOptions`",null,null],[4,"ContainerFilter","","Filter options for container listings",null,null],[13,"ExitCode","","",2,null],[13,"Status","","",2,null],[13,"LabelName","","",2,null],[13,"Label","","",2,null],[4,"EventFilterType","","",null,null],[13,"Container","","",3,null],[13,"Image","","",3,null],[13,"Volume","","",3,null],[13,"Network","","",3,null],[13,"Daemon","","",3,null],[4,"EventFilter","","Filter options for image listings",null,null],[13,"Container","","",4,null],[13,"Event","","",4,null],[13,"Image","","",4,null],[13,"Label","","",4,null],[13,"Type","","",4,null],[13,"Volume","","",4,null],[13,"Network","","",4,null],[13,"Daemon","","",4,null],[4,"ImageFilter","","Filter options for image listings",null,null],[13,"Dangling","","",5,null],[13,"LabelName","","",5,null],[13,"Label","","",5,null],[11,"default","","",6,{"inputs":[],"output":{"name":"pulloptions"}}],[11,"builder","","return a new instance of a builder for options",6,{"inputs":[],"output":{"name":"pulloptionsbuilder"}}],[11,"serialize","","serialize options as a string. returns None if no options are defined",6,null],[11,"default","","",7,{"inputs":[],"output":{"name":"pulloptionsbuilder"}}],[11,"new","","",7,{"inputs":[],"output":{"name":"pulloptionsbuilder"}}],[11,"image","","",7,null],[11,"src","","",7,null],[11,"repo","","",7,null],[11,"tag","","",7,null],[11,"build","","",7,null],[11,"default","","",0,{"inputs":[],"output":{"name":"buildoptions"}}],[11,"builder","","return a new instance of a builder for options\npath is expected to be a file path to a directory containing a Dockerfile\ndescribing how to build a Docker image",0,{"inputs":[{"name":"s"}],"output":{"name":"buildoptionsbuilder"}}],[11,"serialize","","serialize options as a string. returns None if no options are defined",0,null],[11,"default","","",8,{"inputs":[],"output":{"name":"buildoptionsbuilder"}}],[11,"new","","path is expected to be a file path to a directory containing a Dockerfile\ndescribing how to build a Docker image",8,{"inputs":[{"name":"s"}],"output":{"name":"buildoptionsbuilder"}}],[11,"dockerfile","","set the name of the docker file. defaults to &quot;DockerFile&quot;",8,null],[11,"tag","","tag this image with a name after building it",8,null],[11,"remote","","",8,null],[11,"nocache","","don&#39;t use the image cache when building image",8,null],[11,"rm","","",8,null],[11,"forcerm","","",8,null],[11,"build","","",8,null],[11,"default","","",9,{"inputs":[],"output":{"name":"containerlistoptions"}}],[11,"builder","","return a new instance of a builder for options",9,{"inputs":[],"output":{"name":"containerlistoptionsbuilder"}}],[11,"serialize","","serialize options as a string. returns None if no options are defined",9,null],[11,"default","","",10,{"inputs":[],"output":{"name":"containerlistoptionsbuilder"}}],[11,"new","","",10,{"inputs":[],"output":{"name":"containerlistoptionsbuilder"}}],[11,"filter","","",10,null],[11,"all","","",10,null],[11,"since","","",10,null],[11,"before","","",10,null],[11,"sized","","",10,null],[11,"build","","",10,null],[11,"to_json","","",1,null],[11,"builder","","return a new instance of a builder for options",1,{"inputs":[{"name":"str"}],"output":{"name":"containeroptionsbuilder"}}],[11,"serialize","","serialize options as a string. returns None if no options are defined",1,null],[11,"parse_from","","",1,null],[11,"default","","",11,{"inputs":[],"output":{"name":"containeroptionsbuilder"}}],[11,"new","","",11,{"inputs":[{"name":"str"}],"output":{"name":"containeroptionsbuilder"}}],[11,"name","","",11,null],[11,"volumes","","",11,null],[11,"links","","",11,null],[11,"extra_hosts","","",11,null],[11,"volumes_from","","",11,null],[11,"network_mode","","",11,null],[11,"env","","",11,null],[11,"cmd","","",11,null],[11,"entrypoint","","",11,null],[11,"capabilities","","",11,null],[11,"devices","","",11,null],[11,"build","","",11,null],[11,"builder","","return a new instance of a builder for options",12,{"inputs":[],"output":{"name":"execcontaineroptionsbuilder"}}],[11,"serialize","","serialize options as a string. returns None if no options are defined",12,null],[11,"default","","",13,{"inputs":[],"output":{"name":"execcontaineroptionsbuilder"}}],[11,"new","","",13,{"inputs":[],"output":{"name":"execcontaineroptionsbuilder"}}],[11,"cmd","","Command to run, as an array of strings",13,null],[11,"env","","A list of environment variables in the form &quot;VAR=value&quot;",13,null],[11,"build","","",13,null],[11,"default","","",14,{"inputs":[],"output":{"name":"eventsoptions"}}],[11,"builder","","",14,{"inputs":[],"output":{"name":"eventsoptionsbuilder"}}],[11,"serialize","","serialize options as a string. returns None if no options are defined",14,null],[11,"default","","",15,{"inputs":[],"output":{"name":"eventsoptionsbuilder"}}],[11,"new","","",15,{"inputs":[],"output":{"name":"eventsoptionsbuilder"}}],[11,"since","","Filter events since a given timestamp",15,null],[11,"until","","Filter events until a given timestamp",15,null],[11,"filter","","",15,null],[11,"build","","",15,null],[11,"default","","",16,{"inputs":[],"output":{"name":"logsoptions"}}],[11,"builder","","return a new instance of a builder for options",16,{"inputs":[],"output":{"name":"logsoptionsbuilder"}}],[11,"serialize","","serialize options as a string. returns None if no options are defined",16,null],[11,"default","","",17,{"inputs":[],"output":{"name":"logsoptionsbuilder"}}],[11,"new","","",17,{"inputs":[],"output":{"name":"logsoptionsbuilder"}}],[11,"follow","","",17,null],[11,"stdout","","",17,null],[11,"stderr","","",17,null],[11,"timestamps","","",17,null],[11,"tail","","how_many can either by &quot;all&quot; or a to_string() of the number",17,null],[11,"build","","",17,null],[11,"default","","",18,{"inputs":[],"output":{"name":"imagelistoptions"}}],[11,"builder","","",18,{"inputs":[],"output":{"name":"imagelistoptionsbuilder"}}],[11,"serialize","","",18,null],[11,"default","","",19,{"inputs":[],"output":{"name":"imagelistoptionsbuilder"}}],[11,"new","","",19,{"inputs":[],"output":{"name":"imagelistoptionsbuilder"}}],[11,"digests","","",19,null],[11,"all","","",19,null],[11,"filter_name","","",19,null],[11,"filter","","",19,null],[11,"build","","",19,null],[11,"default","","",20,{"inputs":[],"output":{"name":"rmcontaineroptions"}}],[11,"builder","","return a new instance of a builder for options",20,{"inputs":[],"output":{"name":"rmcontaineroptionsbuilder"}}],[11,"serialize","","serialize options as a string. returns None if no options are defined",20,null],[11,"default","","",21,{"inputs":[],"output":{"name":"rmcontaineroptionsbuilder"}}],[11,"new","","",21,{"inputs":[],"output":{"name":"rmcontaineroptionsbuilder"}}],[11,"force","","",21,null],[11,"volumes","","",21,null],[11,"build","","",21,null],[0,"rep","shiplift","Rust representations of docker json structures",null,null],[3,"SearchResult","shiplift::rep","",null,null],[12,"description","","",22,null],[12,"is_official","","",22,null],[12,"is_trusted","","",22,null],[12,"name","","",22,null],[12,"star_count","","",22,null],[3,"Image","","",null,null],[12,"Created","","",23,null],[12,"Id","","",23,null],[12,"ParentId","","",23,null],[12,"Labels","","",23,null],[12,"RepoTags","","",23,null],[12,"RepoDigests","","",23,null],[12,"VirtualSize","","",23,null],[3,"ImageDetails","","",null,null],[12,"Architecture","","",24,null],[12,"Author","","",24,null],[12,"Comment","","",24,null],[12,"Config","","",24,null],[12,"Created","","",24,null],[12,"DockerVersion","","",24,null],[12,"Id","","",24,null],[12,"Os","","",24,null],[12,"Parent","","",24,null],[12,"Size","","",24,null],[12,"VirtualSize","","",24,null],[3,"Container","","",null,null],[12,"Created","","",25,null],[12,"Command","","",25,null],[12,"Id","","",25,null],[12,"Image","","",25,null],[12,"Labels","","",25,null],[12,"Names","","",25,null],[12,"Ports","","",25,null],[12,"Status","","",25,null],[12,"SizeRw","","",25,null],[12,"SizeRootFs","","",25,null],[3,"ContainerDetails","","",null,null],[12,"AppArmorProfile","","",26,null],[12,"Args","","",26,null],[12,"Config","","",26,null],[12,"Created","","",26,null],[12,"Driver","","",26,null],[12,"HostConfig","","",26,null],[12,"HostnamePath","","",26,null],[12,"HostsPath","","",26,null],[12,"LogPath","","",26,null],[12,"Id","","",26,null],[12,"Image","","",26,null],[12,"MountLabel","","",26,null],[12,"NetworkSettings","","",26,null],[12,"Path","","",26,null],[12,"ProcessLabel","","",26,null],[12,"ResolvConfPath","","",26,null],[12,"RestartCount","","",26,null],[12,"State","","",26,null],[12,"Mounts","","",26,null],[3,"Mount","","",null,null],[12,"Source","","",27,null],[12,"Destination","","",27,null],[12,"Mode","","",27,null],[12,"RW","","",27,null],[3,"State","","",null,null],[12,"Error","","",28,null],[12,"ExitCode","","",28,null],[12,"FinishedAt","","",28,null],[12,"OOMKilled","","",28,null],[12,"Paused","","",28,null],[12,"Pid","","",28,null],[12,"Restarting","","",28,null],[12,"Running","","",28,null],[12,"StartedAt","","",28,null],[3,"NetworkSettings","","",null,null],[12,"Bridge","","",29,null],[12,"Gateway","","",29,null],[12,"IPAddress","","",29,null],[12,"IPPrefixLen","","",29,null],[12,"MacAddress","","",29,null],[3,"HostConfig","","",null,null],[12,"CgroupParent","","",30,null],[12,"ContainerIDFile","","",30,null],[12,"CpuShares","","",30,null],[12,"CpusetCpus","","",30,null],[12,"Memory","","",30,null],[12,"MemorySwap","","",30,null],[12,"NetworkMode","","",30,null],[12,"PidMode","","",30,null],[12,"Privileged","","",30,null],[12,"PublishAllPorts","","",30,null],[12,"ReadonlyRootfs","","",30,null],[3,"Config","","",null,null],[12,"AttachStderr","","",31,null],[12,"AttachStdin","","",31,null],[12,"AttachStdout","","",31,null],[12,"Cmd","","",31,null],[12,"Domainname","","",31,null],[12,"Entrypoint","","",31,null],[12,"Env","","",31,null],[12,"Hostname","","",31,null],[12,"Image","","",31,null],[12,"Labels","","",31,null],[12,"OnBuild","","",31,null],[12,"OpenStdin","","",31,null],[12,"StdinOnce","","",31,null],[12,"Tty","","",31,null],[12,"User","","",31,null],[12,"WorkingDir","","",31,null],[3,"Port","","",null,null],[12,"IP","","",32,null],[12,"PrivatePort","","",32,null],[12,"PublicPort","","",32,null],[12,"Type","","",32,null],[3,"Stats","","",null,null],[12,"read","","",33,null],[12,"networks","","",33,null],[12,"memory_stats","","",33,null],[12,"blkio_stats","","",33,null],[12,"cpu_stats","","",33,null],[3,"Network","","",null,null],[12,"rx_dropped","","",34,null],[12,"rx_bytes","","",34,null],[12,"rx_errors","","",34,null],[12,"tx_packets","","",34,null],[12,"tx_dropped","","",34,null],[12,"rx_packets","","",34,null],[12,"tx_errors","","",34,null],[12,"tx_bytes","","",34,null],[3,"MemoryStats","","",null,null],[12,"max_usage","","",35,null],[12,"usage","","",35,null],[12,"failcnt","","",35,null],[12,"limit","","",35,null],[12,"stats","","",35,null],[3,"MemoryStat","","",null,null],[12,"total_pgmajfault","","",36,null],[12,"cache","","",36,null],[12,"mapped_file","","",36,null],[12,"total_inactive_file","","",36,null],[12,"pgpgout","","",36,null],[12,"rss","","",36,null],[12,"total_mapped_file","","",36,null],[12,"writeback","","",36,null],[12,"unevictable","","",36,null],[12,"pgpgin","","",36,null],[12,"total_unevictable","","",36,null],[12,"pgmajfault","","",36,null],[12,"total_rss","","",36,null],[12,"total_rss_huge","","",36,null],[12,"total_writeback","","",36,null],[12,"total_inactive_anon","","",36,null],[12,"rss_huge","","",36,null],[12,"hierarchical_memory_limit","","",36,null],[12,"hierarchical_memsw_limit","","",36,null],[12,"total_pgfault","","",36,null],[12,"total_active_file","","",36,null],[12,"active_anon","","",36,null],[12,"total_active_anon","","",36,null],[12,"total_pgpgout","","",36,null],[12,"total_cache","","",36,null],[12,"inactive_anon","","",36,null],[12,"active_file","","",36,null],[12,"pgfault","","",36,null],[12,"inactive_file","","",36,null],[12,"total_pgpgin","","",36,null],[12,"swap","","",36,null],[12,"total_swap","","",36,null],[3,"CpuStats","","",null,null],[12,"cpu_usage","","",37,null],[12,"system_cpu_usage","","",37,null],[12,"throttling_data","","",37,null],[3,"CpuUsage","","",null,null],[12,"percpu_usage","","",38,null],[12,"usage_in_usermode","","",38,null],[12,"total_usage","","",38,null],[12,"usage_in_kernelmode","","",38,null],[3,"ThrottlingData","","",null,null],[12,"periods","","",39,null],[12,"throttled_periods","","",39,null],[12,"throttled_time","","",39,null],[3,"BlkioStats","","",null,null],[12,"io_service_bytes_recursive","","",40,null],[12,"io_serviced_recursive","","",40,null],[12,"io_queue_recursive","","",40,null],[12,"io_service_time_recursive","","",40,null],[12,"io_wait_time_recursive","","",40,null],[12,"io_merged_recursive","","",40,null],[12,"io_time_recursive","","",40,null],[12,"sectors_recursive","","",40,null],[3,"BlkioStat","","",null,null],[12,"major","","",41,null],[12,"minor","","",41,null],[12,"op","","",41,null],[12,"value","","",41,null],[3,"Change","","",null,null],[12,"Kind","","",42,null],[12,"Path","","",42,null],[3,"Top","","",null,null],[12,"Titles","","",43,null],[12,"Processes","","",43,null],[3,"Version","","",null,null],[12,"ApiVersion","","",44,null],[12,"Version","","",44,null],[12,"GitCommit","","",44,null],[12,"GoVersion","","",44,null],[3,"Info","","",null,null],[12,"Containers","","",45,null],[12,"Images","","",45,null],[12,"Driver","","",45,null],[12,"DockerRootDir","","",45,null],[12,"DriverStatus","","",45,null],[12,"ID","","",45,null],[12,"KernelVersion","","",45,null],[12,"MemTotal","","",45,null],[12,"MemoryLimit","","",45,null],[12,"NCPU","","",45,null],[12,"NEventsListener","","",45,null],[12,"NGoroutines","","",45,null],[12,"Name","","",45,null],[12,"OperatingSystem","","",45,null],[12,"SwapLimit","","",45,null],[12,"SystemTime","","",45,null],[3,"ContainerCreateInfo","","",null,null],[12,"Id","","",46,null],[12,"Warnings","","",46,null],[3,"History","","",null,null],[12,"Id","","",47,null],[12,"Created","","",47,null],[12,"CreatedBy","","",47,null],[3,"Exit","","",null,null],[12,"StatusCode","","",48,null],[3,"Event","","",null,null],[12,"status","","",49,null],[12,"id","","",49,null],[12,"from","","",49,null],[12,"time","","",49,null],[12,"timeNano","","",49,null],[3,"ProgressDetail","","",null,null],[3,"PullInfo","","",null,null],[12,"id","","",50,null],[12,"status","","",50,null],[12,"progress","","",50,null],[12,"progressDetail","","",50,null],[4,"Output","","",null,null],[13,"Status","","",51,null],[12,"id","shiplift::rep::Output","",51,null],[12,"status","","",51,null],[12,"progress","","",51,null],[12,"progress_detail","","",51,null],[13,"Stream","shiplift::rep","",51,null],[13,"Err","","",51,null],[4,"Status","","",null,null],[13,"Untagged","","",52,null],[13,"Deleted","","",52,null],[11,"fmt","","",22,null],[11,"encode","","",22,null],[11,"decode","","",22,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",23,null],[11,"encode","","",23,null],[11,"decode","","",23,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",24,null],[11,"encode","","",24,null],[11,"decode","","",24,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",25,null],[11,"encode","","",25,null],[11,"decode","","",25,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",26,null],[11,"encode","","",26,null],[11,"decode","","",26,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",27,null],[11,"encode","","",27,null],[11,"decode","","",27,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",28,null],[11,"encode","","",28,null],[11,"decode","","",28,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",29,null],[11,"encode","","",29,null],[11,"decode","","",29,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",30,null],[11,"encode","","",30,null],[11,"decode","","",30,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",31,null],[11,"encode","","",31,null],[11,"decode","","",31,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"env","","",31,null],[11,"fmt","","",32,null],[11,"encode","","",32,null],[11,"decode","","",32,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",33,null],[11,"encode","","",33,null],[11,"decode","","",33,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",34,null],[11,"encode","","",34,null],[11,"decode","","",34,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",35,null],[11,"encode","","",35,null],[11,"decode","","",35,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",36,null],[11,"encode","","",36,null],[11,"decode","","",36,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",37,null],[11,"encode","","",37,null],[11,"decode","","",37,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",38,null],[11,"encode","","",38,null],[11,"decode","","",38,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",39,null],[11,"encode","","",39,null],[11,"decode","","",39,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",40,null],[11,"encode","","",40,null],[11,"decode","","",40,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",41,null],[11,"encode","","",41,null],[11,"decode","","",41,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",42,null],[11,"encode","","",42,null],[11,"decode","","",42,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",43,null],[11,"encode","","",43,null],[11,"decode","","",43,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",44,null],[11,"encode","","",44,null],[11,"decode","","",44,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",45,null],[11,"encode","","",45,null],[11,"decode","","",45,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",46,null],[11,"encode","","",46,null],[11,"decode","","",46,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",47,null],[11,"encode","","",47,null],[11,"decode","","",47,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",48,null],[11,"encode","","",48,null],[11,"decode","","",48,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",49,null],[11,"encode","","",49,null],[11,"decode","","",49,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"clone","","",53,null],[11,"fmt","","",53,null],[11,"decode","","",53,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"clone","","",50,null],[11,"fmt","","",50,null],[11,"decode","","",50,{"inputs":[{"name":"__d"}],"output":{"name":"result"}}],[11,"fmt","","",51,null],[11,"fmt","","",52,null],[0,"transport","shiplift","Transports for communicating with the docker daemon",null,null],[4,"Transport","shiplift::transport","Transports are types which define the means of communication\nwith the docker daemon",null,null],[13,"Tcp","","A network tcp interface",54,null],[12,"client","shiplift::transport::Transport","",54,null],[12,"host","","",54,null],[13,"Unix","shiplift::transport","A Unix domain socket",54,null],[12,"client","shiplift::transport::Transport","",54,null],[12,"path","","",54,null],[5,"tar","shiplift::transport","",null,{"inputs":[],"output":{"name":"contenttype"}}],[11,"fmt","","",54,null],[11,"request","","",54,null],[11,"stream","","",54,null],[0,"errors","shiplift","Representations of various client errors",null,null],[4,"Error","shiplift::errors","",null,null],[13,"Decoding","","",55,null],[13,"Encoding","","",55,null],[13,"Parse","","",55,null],[13,"Http","","",55,null],[13,"IO","","",55,null],[13,"Fault","","",55,null],[12,"code","shiplift::errors::Error","",55,null],[12,"message","","",55,null],[11,"fmt","shiplift::errors","",55,null],[11,"from","","",55,{"inputs":[{"name":"parsererror"}],"output":{"name":"error"}}],[11,"from","","",55,{"inputs":[{"name":"decodererror"}],"output":{"name":"error"}}],[11,"from","","",55,{"inputs":[{"name":"encodererror"}],"output":{"name":"error"}}],[11,"from","","",55,{"inputs":[{"name":"httperror"}],"output":{"name":"error"}}],[11,"from","","",55,{"inputs":[{"name":"ioerror"}],"output":{"name":"error"}}],[11,"fmt","","",55,null],[11,"description","","",55,null],[11,"cause","","",55,null],[6,"Result","shiplift","Represents the result of all docker operations",null,null],[11,"new","","Exports an interface for operations that may be performed against a named image",56,{"inputs":[{"name":"docker"},{"name":"s"}],"output":{"name":"image"}}],[11,"inspect","","Inspects a named image&#39;s details",56,null],[11,"history","","Lists the history of the images set of changes",56,null],[11,"delete","","Delete&#39;s an image",56,null],[11,"export","","Export this image to a tarball",56,null],[11,"new","","Exports an interface for interacting with docker images",57,{"inputs":[{"name":"docker"}],"output":{"name":"images"}}],[11,"build","","Builds a new image build by reading a Dockerfile in a target directory",57,null],[11,"list","","Lists the docker images on the current docker host",57,null],[11,"get","","Returns a reference to a set of operations available for a named image",57,null],[11,"search","","Search for docker images by term",57,null],[11,"pull","","Pull and create a new docker images from an existing image",57,null],[11,"export","","exports a collection of named images,\neither by name, name:tag, or image id, into a tarball",57,null],[11,"new","","Exports an interface exposing operations against a container instance",58,{"inputs":[{"name":"docker"},{"name":"s"}],"output":{"name":"container"}}],[11,"id","","a getter for the container id",58,null],[11,"inspect","","Inspects the current docker container instance&#39;s details",58,null],[11,"top","","Returns a `top` view of information about the container process",58,null],[11,"logs","","Returns a stream of logs emitted but the container instance",58,null],[11,"changes","","Returns a set of changes made to the container instance",58,null],[11,"export","","Exports the current docker container into a tarball",58,null],[11,"stats","","Returns a stream of stats specific to this container instance",58,null],[11,"start","","Start the container instance",58,null],[11,"stop","","Stop the container instance",58,null],[11,"restart","","Restart the container instance",58,null],[11,"kill","","Kill the container instance",58,null],[11,"rename","","Rename the container instance",58,null],[11,"pause","","Pause the container instance",58,null],[11,"unpause","","Unpause the container instance",58,null],[11,"wait","","Wait until the container stops",58,null],[11,"delete","","Delete the container instance\nuse remove instead to use the force/v options",58,null],[11,"remove","","Delete the container instance (todo: force/v)",58,null],[11,"exec","","",58,null],[11,"new","","Exports an interface for interacting with docker containers",59,{"inputs":[{"name":"docker"}],"output":{"name":"containers"}}],[11,"list","","Lists the container instances on the docker host",59,null],[11,"get","","Returns a reference to a set of operations available to a specific container instance",59,null],[11,"create","","Returns a builder interface for creating a new container instance",59,null],[11,"new","","constructs a new Docker instance for a docker host listening at a url specified by an env var `DOCKER_HOST`,\nfalling back on unix:///var/run/docker.sock",60,{"inputs":[],"output":{"name":"docker"}}],[11,"host","","constructs a new Docker instance for docker host listening at the given host url",60,{"inputs":[{"name":"url"}],"output":{"name":"docker"}}],[11,"images","","Exports an interface for interacting with docker images",60,null],[11,"containers","","Exports an interface for interacting with docker containers",60,null],[11,"version","","Returns version information associated with the docker daemon",60,null],[11,"info","","Returns information associated with the docker daemon",60,null],[11,"ping","","Returns a simple ping response indicating the docker daemon is accessible",60,null],[11,"events","","Returns an interator over streamed docker events",60,null]],"paths":[[3,"BuildOptions"],[3,"ContainerOptions"],[4,"ContainerFilter"],[4,"EventFilterType"],[4,"EventFilter"],[4,"ImageFilter"],[3,"PullOptions"],[3,"PullOptionsBuilder"],[3,"BuildOptionsBuilder"],[3,"ContainerListOptions"],[3,"ContainerListOptionsBuilder"],[3,"ContainerOptionsBuilder"],[3,"ExecContainerOptions"],[3,"ExecContainerOptionsBuilder"],[3,"EventsOptions"],[3,"EventsOptionsBuilder"],[3,"LogsOptions"],[3,"LogsOptionsBuilder"],[3,"ImageListOptions"],[3,"ImageListOptionsBuilder"],[3,"RmContainerOptions"],[3,"RmContainerOptionsBuilder"],[3,"SearchResult"],[3,"Image"],[3,"ImageDetails"],[3,"Container"],[3,"ContainerDetails"],[3,"Mount"],[3,"State"],[3,"NetworkSettings"],[3,"HostConfig"],[3,"Config"],[3,"Port"],[3,"Stats"],[3,"Network"],[3,"MemoryStats"],[3,"MemoryStat"],[3,"CpuStats"],[3,"CpuUsage"],[3,"ThrottlingData"],[3,"BlkioStats"],[3,"BlkioStat"],[3,"Change"],[3,"Top"],[3,"Version"],[3,"Info"],[3,"ContainerCreateInfo"],[3,"History"],[3,"Exit"],[3,"Event"],[3,"PullInfo"],[4,"Output"],[4,"Status"],[3,"ProgressDetail"],[4,"Transport"],[4,"Error"],[3,"Image"],[3,"Images"],[3,"Container"],[3,"Containers"],[3,"Docker"]]};
initSearch(searchIndex);