FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src
COPY ["src/GpManager.Web.Host/GpManager.Web.Host.csproj", "src/GpManager.Web.Host/"]
COPY ["src/GpManager.Web.Core/GpManager.Web.Core.csproj", "src/GpManager.Web.Core/"]
COPY ["src/GpManager.Application/GpManager.Application.csproj", "src/GpManager.Application/"]
COPY ["src/GpManager.Core/GpManager.Core.csproj", "src/GpManager.Core/"]
COPY ["src/GpManager.EntityFrameworkCore/GpManager.EntityFrameworkCore.csproj", "src/GpManager.EntityFrameworkCore/"]
WORKDIR "/src/src/GpManager.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/GpManager.Web.Host", "src/GpManager.Web.Host"]
COPY ["src/GpManager.Web.Core", "src/GpManager.Web.Core"]
COPY ["src/GpManager.Application", "src/GpManager.Application"]
COPY ["src/GpManager.Core", "src/GpManager.Core"]
COPY ["src/GpManager.EntityFrameworkCore", "src/GpManager.EntityFrameworkCore"]
WORKDIR "/src/src/GpManager.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:7.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "GpManager.Web.Host.dll"]
